<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-accent-700/70 z-10" />
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')] bg-cover bg-center bg-no-repeat" />
    </div>

    <!-- Content -->
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
      <div class="space-y-8">
        <h1 class="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span class="block">Shape Your Future with</span>
          <span class="block text-secondary-400">World-Class Education</span>
        </h1>

        <p class="hero-subtitle text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          Diploma & Degree Programs in Business, Engineering & IT at University Leads Malaysia
        </p>

        <div class="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#programs" class="btn-primary text-lg px-8 py-4">
            Explore Programs
          </a>
          <a href="#contact" class="btn-secondary text-lg px-8 py-4">
            Contact Us
          </a>
        </div>

        <!-- Trust Badges -->
        <div class="hero-badges flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-white/80">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>MOE Approved</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>MQA Accredited</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>Industry Recognized</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <a href="#programs" class="text-white/70 hover:text-white transition-colors">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAnime } from '@/composables/useAnime'

onMounted(() => {
  const { animate, stagger } = useAnime()
  
  // Hero text animation
  animate('.hero-title', {
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: 'easeOutExpo',
    delay: 300
  })

  animate('.hero-subtitle', {
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 600
  })

  animate('.hero-buttons', {
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 900
  })

  animate('.hero-badges > div', {
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutExpo',
    delay: stagger(100, { start: 1200 })
  })
})
</script>
