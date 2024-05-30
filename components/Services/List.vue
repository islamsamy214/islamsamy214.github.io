<script setup>
const { services: services } = useServices();
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center justify-center"
  >
    <SharedServiceCard
      v-for="service in services"
      :key="service.title"
      :service="service"
    >
    </SharedServiceCard>
  </div>
</template>
