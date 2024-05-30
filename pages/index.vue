<script setup>
const config = useRuntimeConfig();
console.log(config.public.appUrl);
useHead({
  meta: [
    {
      name: "description",
      content:
        "Islam Samy is a software engineer specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js. Based in Dubai, UAE.",
    },
    {
      name: "keywords",
      content:
        "Islam Samy, software engineer, web development, Laravel, Golang, Nuxt.js, Vue.js, Dubai, UAE",
    },
    { property: "og:title", content: "Islam Samy - Software Engineer" },
    {
      property: "og:description",
      content:
        "Specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: config.public.appUrl },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Islam Samy - Software Engineer" },
    {
      name: "twitter:description",
      content:
        "Specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js.",
    },
    {
      name: "twitter:image",
      content: config.public.appUrl + "/images/profile.jpg",
    },
    { name: "twitter:site", content: "@zolom214" },
    { name: "twitter:creator", content: "@zolom214" },
  ],
  link: [{ rel: "canonical", href: config.public.appUrl }],
});
</script>

<template>
  <div class="flex flex-col gap-16">
    <HomeCarousal />
    <HomeServices />
    <HomePortfolio />
  </div>
</template>
