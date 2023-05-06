<template>
  <nav id="islam-main-nav" role="navigation">
    <a class="js-islam-nav-toggle islam-nav-toggle active"><i></i></a>
    <div class="js-fullheight islam-table">
      <div class="islam-table-cell js-fullheight">
        <div class="row no-gutters">
          <div class="col-md-12 text-center">
            <h1 class="mb-4">
              <router-link :to="{ name: 'home' }" class="logo"
                >Islam Samy</router-link
              >
            </h1>
            <ul>
              <li :class="{ active: activeLink === 'home' }">
                <router-link :to="{ name: 'home' }"
                  ><span><small>01</small>Home</span></router-link
                >
              </li>
              <li :class="{ active: activeLink === 'about' }">
                <router-link :to="{ name: 'about' }"
                  ><span><small>02</small>Resume</span></router-link
                >
              </li>
              <li :class="{ active: activeLink === 'services' }">
                <router-link :to="{ name: 'services' }"
                  ><span><small>03</small>Services</span></router-link
                >
              </li>
              <li :class="{ active: activeLink === 'portfolio' }">
                <router-link :to="{ name: 'portfolio' }"
                  ><span><small>04</small>Portfolio</span></router-link
                >
              </li>
              <!-- <li :class="{ active: activeLink === 'blog' }">
                <router-link :to="{ name: 'blog' }"
                  ><span><small>05</small>Blog</span></router-link
                >
              </li> -->
              <li :class="{ active: activeLink === 'contact' }">
                <router-link :to="{ name: 'contact' }"
                  ><span><small>06</small>Contact</span></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    activeLink() {
      return this.$route.name;
    },
  }, //end of computed
};
</script>