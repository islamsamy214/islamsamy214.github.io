<script setup>
const config = useRuntimeConfig();
useHead({
  title: "About Islam Samy — Software Engineer & DevOps",
  meta: [
    {
      name: "description",
      content:
        "Islam Samy — Full-stack software engineer and DevOps specialist. Backend, frontend, and cloud infrastructure. Based in Dubai, UAE.",
    },
    {
      name: "keywords",
      content:
        "Islam Samy, software engineer, full-stack, DevOps, Laravel, Golang, Vue.js, Nuxt.js, Dubai, UAE",
    },
    { property: "og:title", content: "About Islam Samy — Software Engineer & DevOps" },
    {
      property: "og:description",
      content:
        "Full-stack engineer building backends, frontends, and cloud infrastructure. Based in Dubai, UAE.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: config.public.appUrl + "/about" },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    }, // Replace with your actual image URL
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "About Islam Samy — Software Engineer & DevOps" },
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
  link: [{ rel: "canonical", href: config.public.appUrl + "/about" }],
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
