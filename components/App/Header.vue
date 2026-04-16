<script setup>
const { openMenu } = useMenu();
</script>

<template>
  <header class="p-4 flex justify-between items-center">
    <h1 class="font-heading font-bold uppercase text-2xl tracking-wider hover:text-emerald-500 transition-colors duration-300 cursor-pointer">Islam Samy</h1>
    <span>
      <Icon
        name="mdi-light:menu"
        size="40"
        class="transition-all duration-300 transform hover:scale-110 hover:text-emerald-500 cursor-pointer"
        @click="openMenu"
      />
    </span>
  </header>
</template>
