<script setup>
const { homeProjects: projects } = useProjects();
</script>

<template>
  <div v-reveal class="flex flex-col items-center justify-center min-h-32 md:min-h-48 gap-4">
    <span class="tracking-widest uppercase text-gray-400 text-lg md:text-xl"
      >Case Studies</span
    >
    <h2 class="font-heading text-2xl md:text-5xl text-white font-bold text-center mx-4">
      Client Success Stories
    </h2>
  </div>
  <div class="flex flex-col gap-8">
    <SharedProjectCard
      v-for="(project, index) in projects"
      :key="project.title"
      :project="project"
      :index="index"
      v-reveal="{ delay: index * 150 }"
    />
  </div>
  <div class="flex items-center justify-center min-h-32 md:min-h-48 gap-4">
    <nuxt-link
      to="/portfolio"
      class="text-white font-bold text-xl hover:text-emerald-500 transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
      >View all case studies</nuxt-link
    >
  </div>
</template>
