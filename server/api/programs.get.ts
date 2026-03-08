import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const supabase = createClient(config.supabaseUrl, config.supabaseKey)
    
    const query = getQuery(event)
    const faculty = query.faculty as string | undefined
    const level = query.level as string | undefined
    
    let dbQuery = supabase
      .from('programs')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
    
    if (faculty && faculty !== 'all') {
      dbQuery = dbQuery.eq('faculty', faculty)
    }
    
    if (level && level !== 'all') {
      dbQuery = dbQuery.eq('level', level)
    }
    
    const { data, error } = await dbQuery
    
    if (error) {
      throw error
    }
    
    return {
      success: true,
      data: data || []
    }
  } catch (error) {
    console.error('Error fetching programs:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch programs'
    })
  }
})
