<template>
  <section id="programs" class="py-20 md:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">
          Our Programs
          <span class="block w-24 h-1 bg-secondary-500 mx-auto mt-4 rounded-full" />
        </h2>
        <p class="section-subtitle mt-4">
          Choose from our wide range of diploma and degree programs designed to prepare you for a successful career
        </p>
      </div>

      <!-- Filters -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <!-- Faculty Tabs -->
        <div class="flex flex-wrap justify-center gap-2 p-1 bg-white rounded-xl shadow-sm">
          <button 
            v-for="tab in facultyTabs" 
            :key="tab.value"
            @click="activeFaculty = tab.value"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all duration-300',
              activeFaculty === tab.value 
                ? 'bg-primary-600 text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Level Filter -->
        <div class="flex flex-wrap justify-center gap-2 p-1 bg-white rounded-xl shadow-sm">
          <button 
            v-for="level in levelFilters" 
            :key="level.value"
            @click="activeLevel = level.value"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all duration-300',
              activeLevel === level.value 
                ? 'bg-accent-600 text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            {{ level.label }}
          </button>
        </div>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProgramCard 
          v-for="program in filteredPrograms" 
          :key="program.id"
          :program="program"
          class="scroll-reveal"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredPrograms.length === 0" class="text-center py-16">
        <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-gray-500 text-lg">No programs found matching your criteria.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProgramCard from '~/components/ui/ProgramCard.vue'
import { useAnime } from '@/composables/useAnime'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const activeFaculty = ref('all')
const activeLevel = ref('all')

const facultyTabs = [
  { label: 'All', value: 'all' },
  { label: 'Business', value: 'Business' },
  { label: 'Engineering', value: 'Engineering' },
  { label: 'IT', value: 'IT' }
]

const levelFilters = [
  { label: 'All', value: 'all' },
  { label: 'Diploma', value: 'Diploma' },
  { label: 'Degree', value: 'Degree' }
]

// Sample programs data
const programs = ref([
  {
    id: '1',
    name: 'Diploma in Business Administration',
    faculty: 'Business',
    level: 'Diploma',
    description: 'Build a strong foundation in business management, marketing, and entrepreneurship.',
    duration_months: 24,
    tuition_fee_myr: 18000,
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    features: ['Industry Projects', 'Internship Placement', 'Professional Certification'],
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Bachelor of Business Administration',
    faculty: 'Business',
    level: 'Degree',
    description: 'Comprehensive business education with specializations in Marketing, Finance, and HR.',
    duration_months: 36,
    tuition_fee_myr: 45000,
    image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    features: ['Real-world Case Studies', 'Leadership Training', 'Global Exchange'],
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Diploma in Engineering',
    faculty: 'Engineering',
    level: 'Diploma',
    description: 'Hands-on technical training in mechanical, electrical, and civil engineering.',
    duration_months: 30,
    tuition_fee_myr: 22000,
    image_url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    features: ['Lab Work', 'Site Visits', 'Technical Workshops'],
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Bachelor of Engineering',
    faculty: 'Engineering',
    level: 'Degree',
    description: 'Professional engineering degree with multiple specialization options.',
    duration_months: 48,
    tuition_fee_myr: 60000,
    image_url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=800&q=80',
    features: ['Research Projects', 'Industry Partnership', 'Professional Accreditation'],
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Diploma in Information Technology',
    faculty: 'IT',
    level: 'Diploma',
    description: 'Practical IT skills in programming, networking, and database management.',
    duration_months: 24,
    tuition_fee_myr: 20000,
    image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    features: ['Coding Bootcamps', 'Project-based Learning', 'Certification Prep'],
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Bachelor of Information Technology',
    faculty: 'IT',
    level: 'Degree',
    description: 'Advanced IT education with focus on software development and cybersecurity.',
    duration_months: 36,
    tuition_fee_myr: 48000,
    image_url: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    features: ['Capstone Projects', 'Industry Mentorship', 'Career Placement'],
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Bachelor of Computer Science',
    faculty: 'IT',
    level: 'Degree',
    description: 'Theoretical and practical computing with AI, data science, and software engineering.',
    duration_months: 42,
    tuition_fee_myr: 52000,
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    features: ['AI/ML Specialization', 'Research Opportunities', 'Tech Industry Links'],
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
])

const filteredPrograms = computed(() => {
  return programs.value.filter(program => {
    const facultyMatch = activeFaculty.value === 'all' || program.faculty === activeFaculty.value
    const levelMatch = activeLevel.value === 'all' || program.level === activeLevel.value
    return facultyMatch && levelMatch && program.is_active
  })
})

onMounted(() => {
  // Scroll reveal animation
  const { observeElement } = useScrollAnimation()
  const { animate } = useAnime()
  
  const revealElements = document.querySelectorAll('.scroll-reveal')
  revealElements.forEach((el, index) => {
    observeElement(el as HTMLElement, (isIntersecting) => {
      if (isIntersecting) {
        animate(el, {
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          easing: 'easeOutExpo',
          delay: index * 100
        })
      }
    })
  })
})
</script>
