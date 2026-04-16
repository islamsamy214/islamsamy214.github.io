<script setup>
const { profile } = useProfile();
</script>

<template>
  <div class="flex gap-4">
    <a
      :href="profile.links.github"
      target="_blank"
      class="bg-gray-800 p-2 rounded-full h-14 w-14 flex justify-center items-center text-white hover:text-emerald-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
    >
      <Icon name="mdi:github" size="30" />
    </a>
    <a
      :href="profile.links.linkedin"
      target="_blank"
      class="bg-gray-800 p-2 rounded-full h-14 w-14 flex justify-center items-center text-white hover:text-emerald-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
    >
      <Icon name="ri:linkedin-fill" size="30" />
    </a>
    <a
      :href="'mailto:' + profile.email"
      class="bg-gray-800 p-2 rounded-full h-14 w-14 flex justify-center items-center text-white hover:text-emerald-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
    >
      <Icon name="mdi:email" size="30" />
    </a>
    <!-- <a
      :href="profile.links.whatsapp"
      target="_blank"
      class="bg-gray-800 p-2 rounded-full h-14 w-14 flex justify-center items-center text-white hover:text-emerald-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
    >
      <Icon name="mdi:whatsapp" size="30" />
    </a> -->
  </div>
</template>
