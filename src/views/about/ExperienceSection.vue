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
          company: "Skyloov DMCC Company",
          location: "Dubai - UAE",
          year: "2023 - Present",
        },
        {
          title: "Software Engineer",
          company: "Blue Holding Company",
          location: "Alexandria - Egypt",
          year: "2022 - 2023",
        },
        {
          title: "Freelance Web Designer & Developer",
          company: "Fiverr, and Upwork",
          location: "Remote",
          year: "2020 - 2022",
        },
      ],
    };
  }, //end of data
};
</script>