<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-5">
        <div class="col-md-7 text-center heading-section ftco-animate">
          <span>Portfolio</span>
          <h2>Checkout a few of my works</h2>
        </div>
      </div>
      <div class="row no-gutters">
        <div
          class="block-3 d-md-flex ftco-animate"
          data-scrollax-parent="true"
          v-for="i in 4"
          :key="i"
        >
          <router-link
            :to="{ name: 'portfolio-single', query: { id: i } }"
            class="image d-flex justify-content-center align-items-center"
            :class="i % 2 === 0 ? 'order-' + i : ''"
            style="background-image: url('assets/images/work-1.jpg')"
            data-scrollax=" properties: { translateY: '-30%'}"
          >
            <div
              class="icon d-flex text-center justify-content-center align-items-center"
            >
              <span class="icon-search"></span>
            </div>
          </router-link>
          <div class="text">
            <h4 class="subheading">Illustration</h4>
            <h2 class="heading">
              <router-link :to="{ name: 'portfolio-single', query: { id: i } }"
                >Even the all-powerful Pointing has no control</router-link
              >
            </h2>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text.
            </p>
            <p>
              <router-link :to="{ name: 'portfolio-single', query: { id: i } }"
                >View Project</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>