<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-8">
    <div v-for="metric in metrics" :key="metric.label" class="flex flex-col gap-2">
      <span class="text-4xl md:text-5xl font-bold text-emerald-500">{{ metric.value }}</span>
      <span class="text-gray-400 uppercase tracking-wider text-sm">{{ metric.label }}</span>
    </div>
  </div>
</template>

<script setup>
const metrics = [
  { value: "5+", label: "Years Experience" },
  { value: "18+", label: "Projects Delivered" },
  { value: "8", label: "Industry Certifications" },
  { value: "4", label: "Countries Served" },
];
</script>
