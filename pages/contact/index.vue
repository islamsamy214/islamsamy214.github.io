<script setup>
useSeo({
  title: "Contact",
  description:
    "Book a consultation with Islam Samy. DevOps and software engineering consultancy based in Dubai, UAE.",
  keywords:
    "contact, Islam Samy, DevOps consultancy, book consultation, Dubai, UAE",
  path: "/contact",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ],
});
</script>
<template>
    <div class="flex flex-col gap-16">
    <ContactBackground />
    <ContactHero />
    <ContactList />
  </div>
</template>
