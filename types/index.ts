export interface Program {
  id: string
  name: string
  faculty: 'Business' | 'Engineering' | 'IT'
  level: 'Diploma' | 'Degree'
  description: string
  duration_months: number
  tuition_fee_myr: number | null
  image_url: string | null
  features: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  student_name: string
  program: string
  quote: string
  rating: number
  avatar_url: string | null
  is_featured: boolean
  display_order: number
  created_at: string
}

export interface Contact {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  status: 'pending' | 'responded' | 'archived'
  created_at: string
  updated_at: string
}

export interface ChatMessage {
  id: string
  session_id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  metadata: Record<string, any>
  created_at: string
}

export interface NavLink {
  label: string
  href: string
}
