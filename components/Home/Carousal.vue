<script setup>
import { reactive, ref, onMounted } from "vue";

const headers = reactive([
  { title: "Hello! I'm", content: "Islam Samy" },
  { title: "I'm", content: "A Software Engineer" },
]);
const currentIndex = ref(0);

let intervalId;
const nextHeader = () => {
  intervalId = currentIndex.value = (currentIndex.value + 1) % headers.length;
};

onMounted(() => {
  setInterval(nextHeader, 4000);
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center tracking-wider md:tracking-widest gap-4 min-h-screen"
  >
    <transition name="slide-fade" mode="out-in">
      <span
        :key="currentIndex + '-title'"
        class="uppercase text-gray-400 md:text-xl"
      >
        {{ headers[currentIndex].title }}
      </span>
    </transition>

    <transition name="slide-fade" mode="out-in">
      <h2
        :key="currentIndex + '-content'"
        class="uppercase text-xl md:text-5xl text-white font-bold"
      >
        {{ headers[currentIndex].content }}
      </h2>
    </transition>
  </div>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.7s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
