<script setup>
const config = useRuntimeConfig();
useHead({
  title: 'Contact Islam Samy - Software Engineer',
  meta: [
    { name: 'description', content: 'Contact Islam Samy, a software engineer specializing in web development, for inquiries, collaborations, or any other queries.' },
    { name: 'keywords', content: 'contact, Islam Samy, software engineer, web development, collaborations, inquiries' },
    { property: 'og:title', content: 'Contact Islam Samy - Software Engineer' },
    { property: 'og:description', content: 'Contact Islam Samy, a software engineer specializing in web development, for inquiries, collaborations, or any other queries.' },
    { property: 'og:type', content: 'website' },
    { property: "og:url", content: config.public.appUrl + "/contact" },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    }, // Replace with your actual image URL
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Contact Islam Samy - Software Engineer" },
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
  link: [{ rel: "canonical", href: config.public.appUrl + "/contact" }],
})
</script>
<template>
    <div class="flex flex-col gap-16">
    <ContactBackground />
    <ContactHero />
    <ContactList />
  </div>
</template>