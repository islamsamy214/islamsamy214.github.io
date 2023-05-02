<template>
  <section class="ftco-section">
    <div class="container mt-5">
      <div class="row justify-content-center mb-5 pb-5">
        <div class="col-md-7 text-center heading-section ftco-animate">
          <span>Portfolio</span>
          <h2>Checkout a few of my works</h2>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="row no-gutters">
          <div
            class="block-3 d-md-flex ftco-animate"
            data-scrollax-parent="true"
            v-for="(portfolio, index) in portfolioProjects"
            :key="index"
          >
            <router-link
              :to="{ name: 'portfolio-details', params: { id: portfolio.id } }"
              class="image d-flex justify-content-center align-items-center"
              :class="index % 2 === 0 ? 'order-1' : ''"
              :style="{ backgroundImage: 'url(' + portfolio.image + ')' }"
              data-scrollax=" properties: { translateY: '-30%'}"
            >
              <div
                class="icon d-flex text-center justify-content-center align-items-center"
              >
                <span class="icon-search"></span>
              </div>
            </router-link>
            <div class="text">
              <h4 class="subheading">{{ portfolio.category }}</h4>
              <h2 class="heading">
                <router-link
                  :to="{
                    name: 'portfolio-details',
                    params: { id: portfolio.id },
                  }"
                  >{{ portfolio.title }}</router-link
                >
              </h2>
              <p>
                {{ portfolio.description }}
              </p>
              <p>
                <router-link
                  :to="{
                    name: 'portfolio-details',
                    params: { id: portfolio.id },
                  }"
                  >View Project</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row mt-5">
        <div class="col text-center">
          <div class="block-27">
            <ul>
              <li><a href="#">&lt;</a></li>
              <li class="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    portfolioProjects() {
      return this.$store.getters.getPortfolioProjects;
    },
  }, // end of computed

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
