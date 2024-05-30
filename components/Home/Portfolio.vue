<script setup>
const { homeProjects: projects } = useProjects();
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-32 md:min-h-48 gap-4">
    <span class="tracking-widest uppercase text-gray-400 text-lg md:text-xl"
      >Portfolio</span
    >
    <h2 class="text-2xl md:text-5xl text-white font-bold text-center mx-4">
      Checkout a few of my projects
    </h2>
  </div>
  <div class="flex flex-col items-center justify-center gap-4">
    <SharedProjectCard
      v-for="(project, index) in projects"
      :key="project.title"
      :project="project"
      :index="index"
    />
  </div>
  <div class="flex items-center justify-center min-h-32 md:min-h-48 gap-4">
    <nuxt-link
      to="/portfolio"
      class="text-white font-bold text-xl hover:text-emerald-500 transition-all"
      >Explore more ...</nuxt-link
    >
  </div>
</template>
