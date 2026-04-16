<script setup>
const config = useRuntimeConfig();
useHead({
  meta: [
    {
      name: "description",
      content:
        "Islam Samy — DevOps and software engineering consultancy based in Dubai, UAE. Cloud infrastructure, CI/CD automation, Kubernetes, Laravel, and Golang.",
    },
    {
      name: "keywords",
      content:
        "Islam Samy, DevOps consultancy, cloud infrastructure, CI/CD automation, Kubernetes, Laravel, Golang, Dubai, UAE",
    },
    { property: "og:title", content: "Islam Samy — DevOps & Software Engineering" },
    {
      property: "og:description",
      content:
        "Cloud infrastructure, CI/CD automation, and scalable software engineering. Based in Dubai, UAE.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: config.public.appUrl },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Islam Samy — DevOps & Software Engineering" },
    {
      name: "twitter:description",
      content:
        "Cloud infrastructure, CI/CD automation, and scalable software engineering. Based in Dubai, UAE.",
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
