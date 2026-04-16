<script setup>
const config = useRuntimeConfig();
useHead({
  title: "About Islam Samy — DevOps & Software Engineering",
  meta: [
    {
      name: "description",
      content:
        "Islam Samy — DevOps and software engineering consultancy. Cloud infrastructure, CI/CD automation, Kubernetes, and scalable backend systems. Based in Dubai, UAE.",
    },
    {
      name: "keywords",
      content:
        "Islam Samy, DevOps consultancy, cloud infrastructure, CI/CD, Kubernetes, Dubai, UAE",
    },
    { property: "og:title", content: "About Islam Samy — DevOps & Software Engineering" },
    {
      property: "og:description",
      content:
        "Cloud infrastructure, CI/CD automation, and scalable software engineering consultancy. Based in Dubai, UAE.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: config.public.appUrl + "/about" },
    {
      property: "og:image",
      content: config.public.appUrl + "/images/profile.jpg",
    }, // Replace with your actual image URL
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "About Islam Samy — DevOps & Software Engineering" },
    {
      name: "twitter:description",
      content:
        "Cloud infrastructure, CI/CD automation, and scalable software engineering consultancy. Based in Dubai, UAE.",
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
