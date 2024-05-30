<script setup>
const { profile } = useProfile();
</script>

<template>
  <div class="flex gap-4">
    <a
      :href="profile.links.github"
      target="_blank"
      class="bg-gray-800 p-2 rounded-full h-14 w-14 flex justify-center items-center text-white hover:text-emerald-500 transition-all"
    >
      <Icon name="mdi:github" size="30" />
    </a>
    <a
      :href="profile.links.buymeacoffee"
      target="_blank"
      class="bg-gray-800 p-2 rounded-full h-14 w-14 flex justify-center items-center text-white hover:text-emerald-500 transition-all"
    >
      <Icon name="simple-icons:buymeacoffee" size="30" />
    </a>
    <a
      :href="profile.links.linkedin"
      target="_blank"
      class="bg-gray-800 p-2 rounded-full h-14 w-14 flex justify-center items-center text-white hover:text-emerald-500 transition-all"
    >
      <Icon name="ri:linkedin-fill" size="30" />
    </a>
    <a
      :href="'mailto:' + profile.email"
      class="bg-gray-800 p-2 rounded-full h-14 w-14 flex justify-center items-center text-white hover:text-emerald-500 transition-all"
    >
      <Icon name="mdi:email" size="30" />
    </a>
    <a
      :href="profile.links.whatsapp"
      target="_blank"
      class="bg-gray-800 p-2 rounded-full h-14 w-14 flex justify-center items-center text-white hover:text-emerald-500 transition-all"
    >
      <Icon name="mdi:whatsapp" size="30" />
    </a>
  </div>
</template>
