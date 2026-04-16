<script setup>
useSeo({
  title: "About",
  description:
    "Islam Samy — Full-stack software engineer and DevOps specialist. Backend, frontend, and cloud infrastructure. Based in Dubai, UAE.",
  keywords:
    "Islam Samy, software engineer, full-stack, DevOps, Laravel, Golang, Vue.js, Nuxt.js, Dubai, UAE",
  path: "/about",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ],
});
</script>

<template>
  <div class="flex flex-col gap-16">
    <AboutBackground />
    <AboutHero />
    <AboutProfile />
    <AboutWhyChooseUs />
    <AboutExperience />
    <AboutEducation />
    <AboutCertifications />
    <AboutSkills />
  </div>
</template>
