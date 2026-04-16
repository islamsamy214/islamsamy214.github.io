<script setup>
const { service } = defineProps({
    service: Object,
});
</script>

<template>
  <div class="group flex flex-col items-center gap-4 min-h-[12rem] justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
    <Icon :name="service.icon" size="48" class="text-emerald-500 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" />
    <h3 class="font-heading text-xl font-bold text-white">{{ service.title }}</h3>
    <p class="text-gray-400 text-center">{{ service.discription }}</p>
  </div>
</template>
