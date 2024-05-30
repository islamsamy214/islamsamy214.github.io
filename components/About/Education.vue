<script setup>
const { educations } = useProfile();
</script>
<template>
  <div class="flex flex-col gap-4 md:gap-8 xl:px-36">
    <h3 class="text-xl md:text-3xl text-white font-bold">Education</h3>
    <div
      class="flex flex-col gap-4 text-lg md:text-xl"
      v-for="education in educations"
      :key="education.title"
    >
      <div class="flex gap-2 justify-between items-center">
        <div class="flex gap-2">
          <h4>
            {{ education.title }}
          </h4>
          <span>-</span>
          <h5>
            {{ education.university }}
          </h5>
        </div>
        <div>
          <span>
            {{ education.year }}
          </span>
        </div>
      </div>
      <div>
        <span>
          {{ education.location }}
        </span>
      </div>
      <!-- hidden if its the last item -->
      <SharedHorizontalLine
        :class="{ hidden: educations[educations.length - 1] === education }"
      />
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
