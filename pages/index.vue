<script setup>
useHead({ titleTemplate: "Islam Samy — Software Engineer & DevOps" });
useSeo({
  title: "Islam Samy — Software Engineer & DevOps",
  description:
    "Full-stack software engineer and DevOps specialist based in Dubai. Laravel, Golang, Nuxt.js, Vue.js, Azure, AWS, Kubernetes.",
  keywords:
    "Islam Samy, software engineer, full-stack developer, DevOps, Laravel, Golang, Nuxt.js, Vue.js, Kubernetes, Azure, AWS, Dubai, UAE",
  breadcrumbs: [{ name: "Home", path: "/" }],
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
