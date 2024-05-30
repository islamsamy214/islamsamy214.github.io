<script setup>
const { openMenu } = useMenu();
</script>

<template>
  <header class="p-4 flex justify-between items-center">
    <h1 class="uppercase text-2xl tracking-wider">Islam Samy</h1>
    <span>
      <Icon
        name="mdi-light:menu"
        size="40"
        class="transition-transform transform hover:scale-110"
        @click="openMenu"
      />
    </span>
  </header>
</template>
