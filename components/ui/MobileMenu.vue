<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen" 
      class="fixed inset-0 bg-black/50 z-40 md:hidden"
      @click="$emit('close')"
    />
  </Transition>

  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div 
      v-if="isOpen" 
      class="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 md:hidden"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-8">
          <span class="text-xl font-bold text-primary-900">Menu</span>
          <button 
            @click="$emit('close')"
            class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <NuxtLink 
            v-for="link in links" 
            :key="link.href"
            :to="link.href"
            class="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
            @click="$emit('close')"
          >
            {{ link.label }}
          </NuxtLink>
          
          <div class="pt-4 mt-4 border-t border-gray-200">
            <button class="w-full btn-primary">
              Apply Now
            </button>
          </div>
        </div>

        <div class="absolute bottom-6 left-6 right-6">
          <div class="text-sm text-gray-500">
            <p class="font-medium text-primary-900">University Leads</p>
            <p>info@universityleads.edu.my</p>
            <p>+60 3-XXXX XXXX</p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface Link {
  label: string
  href: string
}

const props = defineProps<{
  isOpen: boolean
  links: Link[]
}>()

defineEmits<{
  close: []
}>()

// Prevent body scroll when menu is open
watch(() => props.isOpen, (isOpen) => {
  if (process.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})
</script>
