<script setup>
const { menuOpened, closeMenu } = useMenu();

const pages = reactive([
  { title: "Home", link: "/", active: false },
  { title: "About", link: "/about", active: false },
  { title: "Services", link: "/services", active: false },
  { title: "Portfolio", link: "/portfolio", active: false },
  { title: "Contact", link: "/contact", active: false },
]);

const route = useRoute();

watchEffect(() => {
  pages.forEach((page) => {
    page.active = route.path === page.link;
  });
});
</script>

<template>
  <div
    class="animate-jump-in animate-once animate-ease-in-out fixed inset-0 z-0"
    :class="{ hidden: !menuOpened }"
  >
    <!-- overlay -->
    <div
      class="fixed inset-0 z-1 min-w-screen min-h-screen opacity-85 bg-black"
    ></div>
    <!-- menu content -->
    <div class="fixed inset-0 z-2 min-w-screen min-h-screen">
      <!-- close btn -->
      <div class="absolute top-0 right-0 z-3 m-4">
        <button
          @click="closeMenu"
          class="text-2xl text-white cursor-pointer hover:text-emerald-500"
        >
          <Icon name="mdi:close" size="40" />
        </button>
      </div>
      <!-- menu items -->
      <ul class="flex flex-col items-center justify-center h-full">
        <li class="mb-4" v-for="page in pages" :key="page.title">
          <nuxt-link
            :to="page.link"
            class="text-2xl cursor-pointer hover:text-emerald-500"
            :class="{ 'text-emerald-500': page.active }"
            >{{ page.title }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
