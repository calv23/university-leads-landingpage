<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <h3 class="text-2xl font-bold text-primary-900 mb-6">Send us a Message</h3>
    
    <form @submit.prevent="submitForm" class="space-y-6">
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span class="text-red-500">*</span>
        </label>
        <input 
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          :class="{ 'border-red-500': errors.name }"
          placeholder="John Doe"
        />
        <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span class="text-red-500">*</span>
        </label>
        <input 
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          :class="{ 'border-red-500': errors.email }"
          placeholder="john@example.com"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
      </div>

      <!-- Phone -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input 
          id="phone"
          v-model="form.phone"
          type="tel"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="+60 XX-XXXX XXXX"
        />
      </div>

      <!-- Subject -->
      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <select 
          id="subject"
          v-model="form.subject"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">Select a subject</option>
          <option value="admission">Admission Inquiry</option>
          <option value="program">Program Information</option>
          <option value="scholarship">Scholarship</option>
          <option value="visit">Campus Visit</option>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          Message <span class="text-red-500">*</span>
        </label>
        <textarea 
          id="message"
          v-model="form.message"
          required
          rows="5"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
          :class="{ 'border-red-500': errors.message }"
          placeholder="Tell us how we can help you..."
        />
        <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
      </div>

      <!-- Submit Button -->
      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="isSubmitting" class="animate-spin">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </span>
        <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
      </button>

      <!-- Success Message -->
      <div 
        v-if="submitSuccess" 
        class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center space-x-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Thank you! Your message has been sent successfully.</span>
      </div>

      <!-- Error Message -->
      <div 
        v-if="submitError" 
        class="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center space-x-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ submitError }}</span>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const validateForm = () => {
  errors.name = ''
  errors.email = ''
  errors.message = ''
  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = ''

    try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    
    submitSuccess.value = true
    
    // Reset form
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
  } catch (error: any) {
    submitError.value = error.message || 'Something went wrong. Please try again later.'
    console.error('Form submission error:', error)
  }
}
</script>
