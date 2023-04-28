<template>
  <div class="exp mt-5 ftco-animate">
    <h2 class="mb-4">Education</h2>
    <div
      class="exp-wrap py-4"
      v-for="(education, index) in educations"
      :key="index"
    >
      <div class="desc">
        <h4>
          {{ education.title }}<span> - {{ education.company }}</span>
        </h4>
        <p class="location">{{ education.location }}</p>
      </div>
      <div class="year">
        <p>{{ education.year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          title: "Bachelor's Degree in Computer Science",
          company: "Kafr Elshaikh University",
          location: "Kafr Elshaikh - Egypt",
          year: "2017 - 2021",
        },
        {
          title: "Advanced Cloud DevOps Certification",
          company: "Udacity",
          location: "Remote",
          year: "2022 - 2023",
        },
        {
          title: "Front-End Certification",
          company: "Information Technology Institute (ITI)",
          location: "Remote",
          year: "2020 - 2021",
        },
      ],
    };
  }, //end of data
};
</script>