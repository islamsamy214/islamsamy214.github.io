<script setup>
const { homeServices: services } = useServices();
</script>

<template>
  <div
    v-reveal
    class="flex flex-col items-center justify-center min-h-32 md:min-h-48 gap-4"
  >
    <span class="tracking-wider uppercase text-gray-400 text-lg md:text-xl"
      >What I Do</span
    >
    <h2 class="font-heading text-2xl md:text-5xl text-white font-bold">Solutions</h2>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-6"
  >
    <SharedServiceCard
      v-for="(service, index) in services"
      :key="service.title"
      :service="service"
      v-reveal="{ delay: index * 100 }"
    >
    </SharedServiceCard>
  </div>
  <div class="flex items-center justify-center min-h-32 md:min-h-48 gap-4">
    <nuxt-link
      to="/services"
      class="text-white font-bold text-xl hover:text-emerald-500 transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
      >Explore all solutions</nuxt-link
    >
  </div>
</template>
