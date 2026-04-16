<template>
  <div v-reveal class="flex flex-col items-center justify-center gap-6 py-16">
    <h3 class="font-heading text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
      Got a problem? Let's talk about it.
    </h3>
    <p class="text-gray-400 text-center max-w-xl">
      No sales pitch. Tell me what's broken or what you're trying to build, and I'll tell you straight if I can help.
    </p>
    <nuxt-link
      to="/contact"
      class="cta-glow px-8 py-3 bg-emerald-500 text-white font-bold uppercase tracking-wider rounded hover:bg-emerald-600 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all duration-300"
    >
      Book a Consultation
    </nuxt-link>
  </div>
</template>

<style scoped>
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(16,185,129,0.4); }
  50% { box-shadow: 0 0 35px rgba(16,185,129,0.6); }
}
.cta-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}
.cta-glow:hover {
  animation: none;
}
</style>
