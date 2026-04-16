<script setup>
const config = useRuntimeConfig();
useHead({
  title: 'Contact — Islam Samy',
  meta: [
    { name: 'description', content: 'Book a consultation with Islam Samy. DevOps and software engineering consultancy based in Dubai, UAE.' },
    { name: 'keywords', content: 'contact, Islam Samy, DevOps consultancy, book consultation, Dubai, UAE' },
    { property: 'og:title', content: 'Contact — Islam Samy' },
    { property: 'og:description', content: 'Book a consultation with Islam Samy. DevOps and software engineering consultancy based in Dubai, UAE.' },
    { property: 'og:type', content: 'website' },
    { property: "og:url", content: config.public.appUrl + "/contact" },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Contact — Islam Samy" },
    {
      name: "twitter:description",
      content:
        "Book a consultation with Islam Samy. DevOps and software engineering consultancy based in Dubai, UAE.",
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
