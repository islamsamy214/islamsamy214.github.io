<script setup>
const { certifications } = useProfile();
</script>
<template>
  <div class="flex flex-col gap-4 md:gap-8 xl:px-36">
    <h3 class="font-heading text-xl md:text-3xl text-white font-bold">Professional Certifications & Accreditations</h3>
    <div
      class="flex flex-col gap-4 text-lg md:text-xl"
      v-for="certification in certifications"
      :key="certification.title"
    >
      <div class="flex gap-2 justify-between items-center">
        <div class="flex gap-2 flex-wrap">
          <h4 class="font-heading font-semibold">
            <a
              v-if="certification.link"
              :href="certification.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ certification.title }}
            </a>
            <template v-else>{{ certification.title }}</template>
          </h4>
          <span>-</span>
          <h5 class="text-base md:text-lg">
            {{ certification.institution }}
          </h5>
        </div>
        <div>
          <span>
            {{ certification.year }}
          </span>
        </div>
      </div>
      <div>
        <span>
          {{ certification.location }}
        </span>
      </div>
      <!-- hidden if its the last item -->
      <SharedHorizontalLine
        :class="{
          hidden:
            certifications[certifications.length - 1] === certification,
        }"
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
