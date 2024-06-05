<script setup>
const config = useRuntimeConfig();
useHead({
  title: "Islam Samy - Software Engineer",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    // apple touch icon
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Islam Samy",
        jobTitle: "Software Engineer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "UAE",
        },
        email: "mailto:islamsamy214@gmail.com",
        telephone: "+971505416038",
        url: config.public.appUrl ,
        sameAs: [
          "https://github.com/islamsamy214",
          "https://www.linkedin.com/in/islamsamy214/",
          "https://wa.me/+971505416038",
          "https://www.buymeacoffee.com/islamsamy",
        ],
      }),
    },
  ],
});
</script>

<template>
  <AppBackground />
  <div
    class="flex flex-col justify-between min-w-full min-h-screen px-4 lg:px-64"
  >
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
  <AppMenu />
</template>
