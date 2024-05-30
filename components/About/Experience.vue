<script setup>
const { experiences } = useProfile();
</script>
<template>
  <div class="flex flex-col gap-4 md:gap-8 xl:px-36">
    <h3 class="text-xl md:text-3xl text-white font-bold">Experience</h3>
    <div
      class="flex flex-col gap-4 text-lg md:text-xl"
      v-for="experience in experiences"
      :key="experience.title"
    >
      <div class="flex gap-2 justify-between items-center">
        <div class="flex gap-2">
          <h4>
            {{ experience.title }}
          </h4>
          <span>-</span>
          <h5>
            {{ experience.company }}
          </h5>
        </div>
        <div>
          <span>
            {{ experience.year }}
          </span>
        </div>
      </div>
      <div>
        <span>
          {{ experience.location }}
        </span>
      </div>
      <!-- hidden if its the last item -->
      <SharedHorizontalLine :class="{ 'hidden': experiences[experiences.length - 1] === experience }" />
    </div>
  </div>
</template>

<style scoped>
h5,
span {
  @apply text-gray-400;
}

a {
  @apply text-emerald-500 hover:text-white transition-all;
}
</style>
