<template>
  <section class="ftco-section about-section">
    <div class="container">
      <brief-section />
      <div class="row d-flex justify-content-end mt-5">
        <div class="col-md-10">
          <profile-section />
          <experience-section />
          <education-section />
        </div>
      </div>
      <skills-section />
    </div>
  </section>
</template>

<script>
import BriefSection from "./BriefSection.vue";
import ProfileSection from "./ProfileSection.vue";
import ExperienceSection from "./ExperienceSection.vue";
import EducationSection from "./EducationSection.vue";
import SkillsSection from "./SkillsSection.vue";

export default {
  components: {
    BriefSection,
    ProfileSection,
    ExperienceSection,
    EducationSection,
    SkillsSection,
  }, // end of components

  mounted() {
    this.$store.dispatch("closeMenu");
  }, // end of mounted

  beforeRouteLeave(to, from, next) {
    this.$store.commit("startLoading");
    this.$store.commit("stopAnimation");
    next();
  }, // end of beforeRouteLeave
};
</script>