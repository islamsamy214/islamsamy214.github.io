<script setup>
const { profile } = useProfile();
</script>
<template>
  <div class="flex flex-col md:flex-row items-center gap-16 mt-10 md:mt-28">
    <div class="md:w-1/3 h-full rounded-2xl overflow-hidden border border-white/10">
      <img
        src="/images/profile.jpg"
        class="relative object-cover opacity-60 hover:opacity-100 transition-all duration-500 h-full w-full"
        v-parallax="{ speed: 0.5 }"
      />
    </div>
    <div class="md:w-1/2 min-h-full flex flex-col gap-8">
      <h1 class="font-heading text-3xl md:text-5xl font-semibold md:mb-8">
        Hey, I'm {{ profile.name }}
      </h1>
      <p class="text-gray-400 text-lg md:text-xl">
        {{ profile.intro }}
      </p>
      <a
        href="/files/islamSamyCareer.pdf"
        target="_blank"
        download
        class="text-lg md:text-xl text-emerald-500 cursor-pointer"
        >Grab my resume</a
      >
      <SharedLinks />
    </div>
  </div>
</template>
