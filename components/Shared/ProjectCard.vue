<script setup>
import Parallaxy from "@lucien144/vue3-parallaxy";
// get the project from the props
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
    class="flex justify-between gap-20 flex-col md:flex-row mt-20"
    :class="{ 'md:flex-row-reverse': isEven }"
  >
    <div class="md:w-1/2 min-h-full flex justify-center items-center">
      <Parallaxy :speed="70" class="md:hidden">
        <img
          :src="project.image"
          :alt="project.title"
          class="object-cover min-w-full max-h-full"
        />
      </Parallaxy>
      <Parallaxy :speed="150" class="hidden md:block">
        <img
          :src="project.image"
          :alt="project.title"
          class="object-cover min-w-full max-h-full"
        />
      </Parallaxy>
    </div>

    <div class="md:w-2/3 min-h-full flex flex-col gap-4">
      <h5 class="uppercase tracking-wide text-gray-400 text-sm">
        {{ project.category }}
      </h5>
      <h3 class="text-2xl font-bold">{{ project.title }}</h3>
      <p class="text-gray-400 text-sm md:text-base">
        {{ project.description }}
      </p>
      <a
        :href="project.url"
        target="_blank"
        class="text-white text-lg hover:text-emerald-500 transition-all"
        >Visit ...!</a
      >
    </div>
  </div>
</template>
