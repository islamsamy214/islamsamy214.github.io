<script setup>
const { project, index } = defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const isEven = ref((index + 1) % 2 === 0);
</script>

<template>
  <div
    class="group flex justify-between gap-8 md:gap-12 flex-col md:flex-row bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
    :class="{ 'md:flex-row-reverse': isEven }"
  >
    <div class="md:w-1/2 min-h-full flex justify-center items-center rounded-xl overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="object-cover min-w-full max-h-full"
      />
    </div>

    <div class="md:w-1/2 min-h-full flex flex-col gap-4">
      <h5 class="uppercase tracking-wide text-gray-400 text-sm">
        {{ project.category }}
      </h5>
      <h3 class="font-heading text-2xl font-bold">{{ project.title }}</h3>
      <p class="text-gray-400 text-sm md:text-base">
        {{ project.description }}
      </p>
      <a
        :href="project.url"
        target="_blank"
        class="text-white text-lg hover:text-emerald-500 group-hover:text-emerald-400 transition-all"
        >View Case Study</a
      >
    </div>
  </div>
</template>
