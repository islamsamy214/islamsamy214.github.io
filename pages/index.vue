<script setup>
const config = useRuntimeConfig();
useHead({
  meta: [
    {
      name: "description",
      content:
        "Islam Samy — Full-stack software engineer and DevOps specialist based in Dubai. Laravel, Golang, Nuxt.js, Vue.js, Azure, AWS, Kubernetes.",
    },
    {
      name: "keywords",
      content:
        "Islam Samy, software engineer, full-stack developer, DevOps, Laravel, Golang, Nuxt.js, Vue.js, Kubernetes, Azure, AWS, Dubai, UAE",
    },
    { property: "og:title", content: "Islam Samy — Software Engineer & DevOps" },
    {
      property: "og:description",
      content:
        "Full-stack engineer building backends, frontends, and cloud infrastructure. Based in Dubai, UAE.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: config.public.appUrl },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Islam Samy — Software Engineer & DevOps" },
    {
      name: "twitter:description",
      content:
        "Full-stack engineer building backends, frontends, and cloud infrastructure. Based in Dubai, UAE.",
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
    <HomeMetrics />
    <HomeServices />
    <HomePortfolio />
    <HomeCTA />
  </div>
</template>
