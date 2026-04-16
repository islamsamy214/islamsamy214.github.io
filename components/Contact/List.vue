<script setup>
const { profile } = useProfile();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6 text-lg md:text-xl">
    <p class="text-gray-400 text-center max-w-xl">
      Whether it's a backend, a frontend, infrastructure, or the whole thing — tell me what you need. No commitment, just a conversation.
    </p>
    <div class="w-full md:w-2/3 lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
      <div class="info-contianer">
        <span>Email: </span>
        <a
          :href="'mailto:' + profile.email"
          :title="'Email ' + profile.email + ' directly'"
          >{{ profile.email }}</a
        >
      </div>
      <!-- <div class="info-contianer">
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
      </div> -->
    </div>
  </div>
</template>

<style scoped>
span {
  @apply text-gray-400 font-semibold;
}

.info-contianer {
  @apply flex gap-2 justify-between;
}

a {
  @apply text-emerald-500 hover:text-white transition-all;
}
</style>
