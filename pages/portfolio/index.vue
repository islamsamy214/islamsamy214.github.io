<script setup>
const config = useRuntimeConfig();
useHead({
  title: 'Portfolio of Islam Samy - Software Engineer',
  meta: [
    { name: 'description', content: 'Explore the portfolio of Islam Samy, a software engineer specializing in web development. View projects developed using various technologies such as Python, Django, Laravel, Vue.js, and more.' },
    { name: 'keywords', content: 'portfolio, projects, web development, software engineer, Python, Django, Laravel, Vue.js' },
    { property: 'og:title', content: 'Portfolio of Islam Samy - Software Engineer' },
    { property: 'og:description', content: 'Explore the portfolio of Islam Samy, a software engineer specializing in web development. View projects developed using various technologies such as Python, Django, Laravel, Vue.js, and more.' },
    { property: 'og:type', content: 'website' },
    { property: "og:url", content: config.public.appUrl + "/portfolio" },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    }, // Replace with your actual image URL
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Portfolio of Islam Samy - Software Engineer" },
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
    <ProtfolioBackground />
    <ProtfolioHero />
    <ProtfolioList />
  </div>
</template>
