<script setup>
const { service } = defineProps({
    service: Object,
});
</script>

<template>
  <div class="flex flex-col items-center gap-4 h-40 justify-between my-4">
    <Icon :name="service.icon" size="48" class="text-emerald-500" />
    <h3 class="text-xl font-bold text-white">{{ service.title }}</h3>
    <p class="text-gray-400 text-center">{{ service.discription }}</p>
  </div>
</template>
