<template>
  <div ref="metricsRef" class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-12">
    <div v-for="(metric, i) in metrics" :key="metric.label" class="flex flex-col gap-2">
      <span class="text-4xl md:text-5xl font-bold text-emerald-500">{{ animatedValues[i] }}{{ metric.suffix }}</span>
      <span class="text-gray-400 uppercase tracking-wider text-sm">{{ metric.label }}</span>
    </div>
  </div>
</template>

<script setup>
const metrics = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 18, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "", label: "Industry Certifications" },
  { value: 4, suffix: "", label: "Countries Served" },
];

const animatedValues = ref(metrics.map(() => 0));
const metricsRef = ref(null);
const hasAnimated = ref(false);

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const animateValues = () => {
  if (hasAnimated.value) return;
  hasAnimated.value = true;

  const duration = 2000;
  const start = performance.now();

  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = easeOutCubic(progress);

    animatedValues.value = metrics.map((m) => Math.floor(eased * m.value));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      animatedValues.value = metrics.map((m) => m.value);
    }
  };

  requestAnimationFrame(step);
};

onMounted(() => {
  if (!metricsRef.value) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateValues();
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(metricsRef.value);

  onUnmounted(() => observer.disconnect());
});
</script>
