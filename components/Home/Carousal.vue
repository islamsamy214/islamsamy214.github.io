<script setup>
import { reactive, ref, onMounted } from "vue";

const headers = reactive([
  { title: "I build backends that", content: "Handle Real Traffic" },
  { title: "I ship frontends that", content: "Users Actually Like" },
  { title: "I run infrastructure that", content: "Doesn't Break at 2am" },
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
    class="flex flex-col items-center justify-center gap-4 min-h-screen"
  >
    <transition name="slide-fade" mode="out-in">
      <span
        :key="currentIndex + '-title'"
        class="uppercase tracking-wider text-gray-400 md:text-xl"
      >
        {{ headers[currentIndex].title }}
      </span>
    </transition>

    <transition name="slide-fade" mode="out-in">
      <h2
        :key="currentIndex + '-content'"
        class="font-heading uppercase text-xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent"
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
