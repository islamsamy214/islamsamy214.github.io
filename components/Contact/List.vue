<script setup>
const { profile } = useProfile();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 text-lg md:text-xl">
    <div class="info-contianer">
      <span>Email: </span>
      <a
        :href="'mailto:' + profile.email"
        :title="'Email ' + profile.email + ' directly'"
        >{{ profile.email }}</a
      >
    </div>
    <div class="info-contianer">
      <span>Phone: </span>
      <a
        :href="'tel:' + profile.phoneNumber"
        :title="'Call ' + profile.phoneNumber + ' directly'"
        >{{ profile.phone }}</a
      >
    </div>
    <div class="info-contianer">
      <span>Alt Phone: </span>
      <a
        :href="'tel:' + profile.altPhoneNumber"
        :title="'Call ' + profile.altPhoneNumber + ' directly'"
        >{{ profile.altPhone }}</a
      >
    </div>
  </div>
</template>

<style scoped>
span {
  @apply text-gray-400 font-semibold;
}

.info-contianer {
  @apply flex gap-2 justify-between w-full md:w-1/2;
}

a {
  @apply text-emerald-500 hover:text-white transition-all;
}
</style>
