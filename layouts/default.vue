<template>
  <div class="min-h-screen bg-white">
    <Navigation />
    <slot />
    <ChatBot />
  </div>
</template>

<script setup lang="ts">
import Navigation from '~/components/ui/Navigation.vue'
import ChatBot from '~/components/ui/ChatBot.vue'

useHead({
  title: 'University Leads - Shape Your Future',
  meta: [
    { name: 'description', content: 'Diploma & Degree Programs in Business, Engineering & IT at University Leads Malaysia' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
