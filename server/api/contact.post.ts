import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    if (!body.name?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Name is required'
      })
    }
    
    if (!body.email?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email is required'
      })
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email format'
      })
    }
    
    if (!body.message?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message is required'
      })
    }
    
    const config = useRuntimeConfig()
    const supabase = createClient(config.supabaseUrl, config.supabaseKey)
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: body.name.trim(),
          email: body.email.trim(),
          phone: body.phone?.trim() || null,
          subject: body.subject?.trim() || null,
          message: body.message.trim()
        }
      ])
      .select()
    
    if (error) {
      throw error
    }
    
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data
    }
  } catch (error: any) {
    console.error('Error submitting contact form:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to submit form. Please try again later.'
    })
  }
})
