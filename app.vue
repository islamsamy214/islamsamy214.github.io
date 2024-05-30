<template>
  <div class="min-w-screen min-h-screen text-gray-100">
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
/* color the whole body */
body {
  background-color: #121212;
}
</style>
