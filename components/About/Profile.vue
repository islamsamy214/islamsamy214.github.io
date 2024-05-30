<script setup>
const { profile } = useProfile();
</script>
<template>
  <div class="flex flex-col gap-4 md:gap-8 xl:px-36">
    <div class="flex flex-col gap-4 md:gap-8">
      <h3 class="text-xl md:text-3xl text-white font-bold">Profile</h3>
      <h4 class="text-lg md:text-xl">
        {{ profile.header }}
      </h4>
      <p class="text-gray-400 text-lg md:text-xl">{{ profile.description }}</p>
    </div>
    <div class="flex flex-col gap-2 md:gap-4">
      <div class="info-contianer">
        <span>Name: </span>
        <p>{{ profile.name }}</p>
      </div>
      <div class="info-contianer">
        <span>Address: </span>
        <p>{{ profile.address }}</p>
      </div>
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
  </div>
</template>

<style scoped>
span {
  @apply text-gray-400 font-semibold;
}

.info-contianer {
  @apply flex gap-2;
}

a {
  @apply text-emerald-500 hover:text-white transition-all;
}
</style>
