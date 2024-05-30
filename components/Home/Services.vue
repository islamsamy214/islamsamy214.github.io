<script setup>
const { homeServices: services } = useServices();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-32 md:min-h-48 gap-4"
  >
    <span class="tracking-widest uppercase text-gray-400 text-lg md:text-xl"
      >What I do</span
    >
    <h2 class="text-2xl md:text-5xl text-white font-bold">Services</h2>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center justify-center"
  >
    <SharedServiceCard
      v-for="service in services"
      :key="service.title"
      :service="service"
    >
    </SharedServiceCard>
  </div>
  <div class="flex items-center justify-center min-h-32 md:min-h-48 gap-4">
    <nuxt-link
      to="/services"
      class="text-white font-bold text-xl hover:text-emerald-500 transition-all"
      >And more ...</nuxt-link
    >
  </div>
</template>
