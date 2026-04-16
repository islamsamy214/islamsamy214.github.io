<script setup>
useSeo({
  title: "Case Studies",
  description:
    "Explore client success stories from Islam Samy. Real estate portals, corporate intranets, ERP systems, and education platforms built with Laravel, Golang, Vue.js, and cloud infrastructure.",
  keywords:
    "Islam Samy, case studies, client projects, real estate, ERP, education, Laravel, cloud infrastructure, Dubai",
  path: "/portfolio",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/portfolio" },
  ],
});
</script>
<template>
  <div class="flex flex-col gap-16">
    <ProtfolioBackground />
    <ProtfolioHero />
    <ProtfolioList />
  </div>
</template>
