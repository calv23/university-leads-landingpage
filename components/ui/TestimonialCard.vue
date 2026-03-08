<template>
  <div class="card-hover bg-gray-50 rounded-2xl p-8 h-full flex flex-col">
    <!-- Quote Icon -->
    <div class="mb-6">
      <svg class="w-10 h-10 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>

    <!-- Quote -->
    <blockquote class="text-gray-700 text-lg leading-relaxed mb-6 flex-1">
      "{{ testimonial.quote }}"
    </blockquote>

    <!-- Rating -->
    <div class="flex items-center space-x-1 mb-6">
      <svg 
        v-for="star in 5" 
        :key="star"
        :class="[
          'w-5 h-5',
          star <= testimonial.rating ? 'text-secondary-400' : 'text-gray-300'
        ]"
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>

    <!-- Author -->
    <div class="flex items-center space-x-4">
      <img 
        :src="testimonial.avatar_url || '/images/avatar-placeholder.jpg'" 
        :alt="testimonial.student_name"
        class="w-14 h-14 rounded-full object-cover border-2 border-accent-500"
      />
      <div>
        <h4 class="font-bold text-gray-900">{{ testimonial.student_name }}</h4>
        <p class="text-sm text-gray-600">{{ testimonial.program }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '@/types'

defineProps<{
  testimonial: Testimonial
}>()
</script>
