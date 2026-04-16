<script setup>
const { whyChooseUs } = useProfile();
</script>
<template>
  <div class="flex flex-col gap-4 md:gap-8 xl:px-36">
    <h3 class="font-heading text-xl md:text-3xl text-white font-bold">Why Work With Me</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="item in whyChooseUs"
        :key="item.title"
        class="flex flex-col gap-3 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
      >
        <h4 class="text-lg md:text-xl text-emerald-500 font-semibold">
          {{ item.title }}
        </h4>
        <p class="text-gray-400">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
