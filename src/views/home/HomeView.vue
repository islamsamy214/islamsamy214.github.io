<template>
  <div>
    <div class="KW_progressContainer">
      <div class="KW_progressBar"></div>
    </div>
    <div class="page">
      <side-bar />
      <top-bar />
      <div id="islam-page">
        <slider-section />
        <service-section />
        <work-section />
        <footer-bar />
      </div>
    </div>
  </div>
</template>

<script>
import SliderSection from "./SliderSection.vue";
import ServiceSection from "./ServiceSection.vue";
import WorkSection from "./WorkSection.vue";
export default {
  components: {
    SliderSection,
    ServiceSection,
    WorkSection,
  },
};
</script>