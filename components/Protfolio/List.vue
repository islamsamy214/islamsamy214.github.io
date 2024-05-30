<script setup>
const { projects } = useProjects();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <SharedProjectCard
      v-for="(project, index) in projects"
      :key="project.title"
      :project="project"
      :index="index"
    />
  </div>
</template>
