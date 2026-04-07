import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Consultancy Leads table functions
export const createConsultancyLead = async (leadData) => {
  try {
    const { data, error } = await supabase
      .from('consultancy_leads')
      .insert([
        {
          name: leadData.name,
          whatsapp: leadData.whatsapp,
          education: leadData.education,
          country_interest: leadData.country_interest,
          budget_range: leadData.budget_range,
          status: 'New',
          created_at: new Date().toISOString()
        }
      ])
    
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error creating lead:', error)
    return { success: false, error: error.message }
  }
}

export const getConsultancyLeads = async () => {
  try {
    const { data, error } = await supabase
      .from('consultancy_leads')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching leads:', error)
    return { success: false, error: error.message }
  }
}
