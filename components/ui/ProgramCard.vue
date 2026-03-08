<template>
  <div class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img 
        :src="program.image_url || '/images/program-placeholder.jpg'" 
        :alt="program.name"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div class="absolute top-4 left-4">
        <span 
          :class="[
            'px-3 py-1 rounded-full text-xs font-semibold',
            facultyColorClass
          ]"
        >
          {{ program.faculty }}
        </span>
      </div>
      <div class="absolute top-4 right-4">
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white text-gray-800">
          {{ program.level }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ program.name }}</h3>
      
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ program.description }}
      </p>

      <!-- Meta Info -->
      <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div class="flex items-center space-x-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ program.duration_months }} months</span>
        </div>
        <div v-if="program.tuition_fee_myr" class="font-semibold text-primary-600">
          RM {{ program.tuition_fee_myr.toLocaleString() }}
        </div>
      </div>

      <!-- Features -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="feature in program.features.slice(0, 3)" 
          :key="feature"
          class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
        >
          {{ feature }}
        </span>
      </div>

      <!-- CTA -->
      <button class="w-full py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Program } from '@/types'

const props = defineProps<{
  program: Program
}>()

const facultyColorClass = computed(() => {
  const colors: Record<string, string> = {
    'Business': 'bg-secondary-500 text-white',
    'Engineering': 'bg-primary-600 text-white',
    'IT': 'bg-accent-600 text-white'
  }
  return colors[props.program.faculty] || 'bg-gray-500 text-white'
})
</script>
