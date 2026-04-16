<script setup>
const config = useRuntimeConfig();
useHead({
  title: "Solutions — Islam Samy",
  meta: [
    {
      name: "description",
      content:
        "Islam Samy delivers cloud infrastructure, CI/CD automation, Kubernetes orchestration, backend engineering, and full-stack web development solutions.",
    },
    { name: 'keywords', content: 'Islam Samy, solutions, cloud infrastructure, CI/CD, Kubernetes, backend engineering, DevOps, Dubai' },
    { property: 'og:title', content: 'Solutions — Islam Samy' },
    { property: 'og:description', content: 'Cloud infrastructure, CI/CD automation, Kubernetes, backend engineering, and full-stack web development solutions.' },
    { property: 'og:type', content: 'website' },
    { property: "og:url", content: config.public.appUrl + "/services" },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Solutions — Islam Samy" },
    {
      name: "twitter:description",
      content:
        "Cloud infrastructure, CI/CD automation, Kubernetes, backend engineering, and full-stack web development solutions.",
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
