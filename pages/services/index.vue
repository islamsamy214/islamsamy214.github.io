<script setup>
const config = useRuntimeConfig();
useHead({
  title: "Services by Islam Samy - Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "Discover the range of web development services offered by Islam Samy, including backend development, frontend development, DevOps, and more.",
    },
    { name: 'keywords', content: 'services, web development, backend development, frontend development, DevOps, database design, SEO optimization, e-commerce development' },
    { property: 'og:title', content: 'Services Offered by Islam Samy' },
    { property: 'og:description', content: 'Discover the range of web development services offered by Islam Samy, including backend development, frontend development, DevOps, and more.' },
    { property: 'og:type', content: 'website' },
    { property: "og:url", content: config.public.appUrl + "/services" },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    }, // Replace with your actual image URL
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Services by Islam Samy - Software Engineer" },
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
  link: [{ rel: "canonical", href: config.public.appUrl + "/services" }],
});
</script>
<template>
  <div class="flex flex-col gap-16">
    <ServicesBackground />
    <ServicesHero />
    <ServicesList />
  </div>
</template>
