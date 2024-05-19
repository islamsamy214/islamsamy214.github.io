<template>
  <div class="exp mt-5 ftco-animate">
    <h2 class="mb-4">Experience</h2>
    <div
      class="exp-wrap py-4"
      v-for="(experience, index) in experiences"
      :key="index"
    >
      <div class="desc">
        <h4>
          {{ experience.title }}<span> - {{ experience.company }}</span>
        </h4>
        <p class="location">{{ experience.location }}</p>
      </div>
      <div class="year">
        <p>{{ experience.year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
      {
          title: "Software Engineer",
          company: "Skyloov DMCC",
          location: "Dubai, UAE - Onsite",
          year: "2023 - Present",
        },
        {
          title: "Software Engineer",
          company: "Blue Holding",
          location: "Alexandria, Egypt - Onsite",
          year: "2022 - 2023",
        },
        {
          title: "Backend Developer",
          company: "POSLIX",
          location: "Oman, Muscat - Remote",
          year: "2021 - 2022",
        },
        {
          title: "Freelance Software Engineer",
          company: "Fiverr, and Upwork",
          location: "Alexandria, Egypt - Remote",
          year: "2020 - 2021",
        },
      ],
    };
  }, //end of data
};
</script>