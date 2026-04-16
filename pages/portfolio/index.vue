<script setup>
const config = useRuntimeConfig();
useHead({
  title: 'Case Studies — Islam Samy',
  meta: [
    { name: 'description', content: 'Explore client success stories from Islam Samy. Real estate portals, corporate intranets, ERP systems, and education platforms built with Laravel, Golang, Vue.js, and cloud infrastructure.' },
    { name: 'keywords', content: 'Islam Samy, case studies, client projects, real estate, ERP, education, Laravel, cloud infrastructure, Dubai' },
    { property: 'og:title', content: 'Case Studies — Islam Samy' },
    { property: 'og:description', content: 'Client success stories across real estate, corporate, ERP, and education platforms.' },
    { property: 'og:type', content: 'website' },
    { property: "og:url", content: config.public.appUrl + "/portfolio" },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Case Studies — Islam Samy" },
    {
      name: "twitter:description",
      content:
        "Client success stories across real estate, corporate, ERP, and education platforms.",
    },
    {
      name: "twitter:image",
      content: config.public.appUrl + "/images/profile.jpg",
    },
    { name: "twitter:site", content: "@zolom214" },
    { name: "twitter:creator", content: "@zolom214" },
  ],
  link: [{ rel: "canonical", href: config.public.appUrl + "/portfolio" }],
});
</script>
<template>
  <div class="flex flex-col gap-16">
    <ProtfolioBackground />
    <ProtfolioHero />
    <ProtfolioList />
  </div>
</template>
