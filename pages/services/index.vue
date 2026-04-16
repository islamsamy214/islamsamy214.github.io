<script setup>
useSeo({
  title: "Solutions",
  description:
    "Islam Samy delivers cloud infrastructure, CI/CD automation, Kubernetes orchestration, backend engineering, and full-stack web development solutions.",
  keywords:
    "Islam Samy, solutions, cloud infrastructure, CI/CD, Kubernetes, backend engineering, DevOps, Dubai",
  path: "/services",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/services" },
  ],
});
</script>
<template>
  <div class="flex flex-col gap-16">
    <ServicesBackground />
    <ServicesHero />
    <ServicesList />
  </div>
</template>
