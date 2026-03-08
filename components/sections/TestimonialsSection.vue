<template>
  <section id="testimonials" class="py-20 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">
          What Our Students Say
          <span class="block w-24 h-1 bg-secondary-500 mx-auto mt-4 rounded-full" />
        </h2>
        <p class="section-subtitle mt-4">
          Hear from our graduates about their transformative educational experience
        </p>
      </div>

      <!-- Carousel -->
      <div class="relative">
        <!-- Testimonials Container -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }"
          >
            <div 
              v-for="testimonial in testimonials" 
              :key="testimonial.id"
              class="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
            >
              <TestimonialCard :testimonial="testimonial" />
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
          :disabled="currentSlide === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
          :disabled="currentSlide >= maxSlide"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide >= maxSlide }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center space-x-2 mt-8">
          <button 
            v-for="dot in totalDots" 
            :key="dot"
            @click="goToSlide(dot - 1)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentSlide === dot - 1 
                ? 'bg-primary-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            ]"
            :aria-label="`Go to slide ${dot}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from '~/components/ui/TestimonialCard.vue'

const currentSlide = ref(0)
const visibleSlides = ref(3)

// Responsive visible slides
const updateVisibleSlides = () => {
  if (window.innerWidth < 768) {
    visibleSlides.value = 1
  } else if (window.innerWidth < 1024) {
    visibleSlides.value = 2
  } else {
    visibleSlides.value = 3
  }
}

onMounted(() => {
  updateVisibleSlides()
  window.addEventListener('resize', updateVisibleSlides)
  
  // Auto-rotate every 5 seconds
  const interval = setInterval(() => {
    if (currentSlide.value < maxSlide.value) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }, 5000)
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateVisibleSlides)
    clearInterval(interval)
  })
})

const testimonials = ref([
  {
    id: '1',
    student_name: 'Sarah Chen',
    program: 'Bachelor of Business Administration',
    quote: 'The business program at University Leads transformed my career prospects. The practical case studies and internship opportunities prepared me perfectly for the corporate world.',
    rating: 5,
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    is_featured: true,
    display_order: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    student_name: 'Ahmad Rahman',
    program: 'Bachelor of Engineering',
    quote: 'The engineering faculty has state-of-the-art labs and dedicated professors. I graduated with both technical skills and industry connections that helped me land my dream job.',
    rating: 5,
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    is_featured: true,
    display_order: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    student_name: 'Priya Sharma',
    program: 'Bachelor of Computer Science',
    quote: 'The computer science program here is exceptional. The AI and machine learning courses are cutting-edge, and the career services team was incredibly supportive throughout my job search.',
    rating: 5,
    avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    is_featured: true,
    display_order: 3,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    student_name: 'Wei Ming',
    program: 'Diploma in Information Technology',
    quote: 'Even as a diploma student, I felt fully supported. The hands-on projects gave me real-world experience that employers valued immediately after graduation.',
    rating: 5,
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    is_featured: true,
    display_order: 4,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    student_name: 'Fatima Hassan',
    program: 'Bachelor of Business Administration',
    quote: 'The global exchange program was a life-changing experience. I studied abroad for a semester and gained international business perspectives that set me apart from other graduates.',
    rating: 5,
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    is_featured: false,
    display_order: 5,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    student_name: 'Kumar Patel',
    program: 'Diploma in Engineering',
    quote: 'Starting with the diploma program was the best decision. It built my confidence and gave me a solid foundation before I continued to the degree program.',
    rating: 4,
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    is_featured: false,
    display_order: 6,
    created_at: new Date().toISOString()
  }
])

const maxSlide = computed(() => Math.max(0, testimonials.value.length - visibleSlides.value))
const totalDots = computed(() => maxSlide.value + 1)

const nextSlide = () => {
  if (currentSlide.value < maxSlide.value) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}
</script>
