<template>
  <section class="relative py-20 md:py-32 bg-primary-900 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');" />
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Ready to Start Your Journey?
      </h2>

      <p class="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
        Applications are now open for 2024 intake. Take the first step towards a brighter future with University Leads.
      </p>

      <button class="animate-pulse-slow bg-secondary-500 text-white text-lg font-bold px-10 py-5 rounded-full shadow-lg hover:bg-secondary-600 hover:scale-105 transition-all duration-300">
        Apply Now
      </button>

      <!-- Trust Badges -->
      <div class="flex flex-wrap justify-center gap-8 mt-12">
        <div class="flex items-center space-x-3 text-white/70">
          <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div class="text-left">
            <p class="font-semibold text-white">MOE Approved</p>
            <p class="text-sm">Ministry of Education</p>
          </div>
        </div>

        <div class="flex items-center space-x-3 text-white/70">
          <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div class="text-left">
            <p class="font-semibold text-white">MQA Accredited</p>
            <p class="text-sm">Quality Assurance</p>
          </div>
        </div>

        <div class="flex items-center space-x-3 text-white/70">
          <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="text-left">
            <p class="font-semibold text-white">Industry Ready</p>
            <p class="text-sm">Job Placement Support</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
