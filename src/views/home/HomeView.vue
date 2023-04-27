<template>
  <loading v-if="isLoading" />

  <div v-else>
    <slider-section />
    <service-section />
    <work-section />
  </div>
</template>

<script>
import SliderSection from "./SliderSection.vue";
import ServiceSection from "./ServiceSection.vue";
import WorkSection from "./WorkSection.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SliderSection,
    ServiceSection,
    WorkSection,
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
  mounted() {
    this.$store.dispatch("closeMenu");
    this.$store.commit("stopLoading");

    if (!this.$store.getters.isAnimated) {
      location.reload();
    }
  },
};
</script>