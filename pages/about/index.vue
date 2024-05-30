<script setup>
const config = useRuntimeConfig();
useHead({
  title: "About Islam Samy - Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "Learn more about Islam Samy, a software engineer specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js. Based in Dubai, UAE.",
    },
    {
      name: "keywords",
      content:
        "About Islam Samy, software engineer, web development, Laravel, Golang, Nuxt.js, Vue.js, Dubai, UAE",
    },
    { property: "og:title", content: "About Islam Samy - Software Engineer" },
    {
      property: "og:description",
      content:
        "Learn more about Islam Samy, a software engineer specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: config.public.appUrl + "/about" },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    }, // Replace with your actual image URL
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "About Islam Samy - Software Engineer" },
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
  link: [{ rel: "canonical", href: config.public.appUrl + "/about" }],
});
</script>

<template>
  <div class="flex flex-col gap-16">
    <AboutBackground />
    <AboutHero />
    <AboutProfile />
    <AboutExperience />
    <AboutEducation />
    <AboutSkills />
  </div>
</template>
