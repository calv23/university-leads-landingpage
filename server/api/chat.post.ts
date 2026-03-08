import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'

const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT = 10
const RATE_LIMIT_WINDOW = 60000

const systemPrompt = `You are a helpful admissions assistant for University Leads Malaysia.
You help prospective students with information about:
- Diploma and Degree programs in Business, Engineering, and IT
- Admission requirements and processes
- Tuition fees and scholarships
- Campus facilities and student life
- Application deadlines

Be friendly, professional, and concise. If you don't know something, direct them to contact the admissions office at admissions@universityleads.edu.my or +60 3-XXXX XXXX.

Current programs offered:
- Diploma in Business Administration
- Bachelor of Business Administration
- Diploma in Engineering
- Bachelor of Engineering
- Diploma in Information Technology
- Bachelor of Information Technology
- Bachelor of Computer Science`

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    })
    return true
  }
  
  if (record.count >= RATE_LIMIT) {
    return false
  }
  
  record.count++
  return true
}

export default defineEventHandler(async (event) => {
  try {
    const ip = getRequestHeader(event, 'x-forwarded-for') || 
              getRequestHeader(event, 'x-real-ip') || 
              'unknown'
    
    if (!checkRateLimit(ip as string)) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Rate limit exceeded. Please try again in a minute.'
      })
    }
    
    const body = await readBody(event)
    
    if (!body.message?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message is required'
      })
    }
    
    const sessionId = body.sessionId || crypto.randomUUID()
    const message = body.message.trim()
    
    const config = useRuntimeConfig()
    const openai = new OpenAI({
      apiKey: config.openaiApiKey
    })
    
    const supabase = createClient(config.supabaseUrl, config.supabaseKey)
    
    await supabase
      .from('chat_messages')
      .insert([
        {
          session_id: sessionId,
          role: 'user',
          content: message,
          metadata: { ip }
        }
      ])
    
    const { data: history } = await supabase
      .from('chat_messages')
      .select('role, content')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .limit(10)
    
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPrompt },
      ...(history || []).map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      })),
      { role: 'user', content: message }
    ]
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 500,
      temperature: 0.7
    })
    
    const assistantMessage = completion.choices[0]?.message?.content || 
      "I'm sorry, I couldn't process your request. Please try again."
    
    await supabase
      .from('chat_messages')
      .insert([
        {
          session_id: sessionId,
          role: 'assistant',
          content: assistantMessage,
          metadata: { tokens: completion.usage?.total_tokens }
        }
      ])
    
    return {
      success: true,
      message: assistantMessage,
      sessionId
    }
  } catch (error: any) {
    console.error('Chat error:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process your message. Please try again later.'
    })
  }
})
