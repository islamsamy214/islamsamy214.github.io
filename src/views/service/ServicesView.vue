<template>
  <section class="ftco-section">
    <div class="container mt-5">
      <div class="row justify-content-center mb-5 pb-5">
        <div class="col-md-7 text-center heading-section ftco-animate">
          <span>What i do</span>
          <h2>My services</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 d-flex align-self-stretch ftco-animate" v-for="(service, index) in services" :key="index">
          <div class="media block-6 services p-3 py-4 d-block text-center">
            <div class="icon mb-3"><span :class="service.icon"></span></div>
            <div class="media-body">
              <h3 class="heading">{{ service.title }}</h3>
              <h3 class="desc">{{ service.description }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default ({

  data() {
    return {
      services: [{
        icon: "icon-desktop",
        title: "Highly Professional Design",
        description: "I will design and develope a highly professional website for you."
      },
      {
        icon: "icon-mobile",
        title: "Mobile-Friendly websites",
        description: "It will be fully responsive and mobile friendly."
      },
      {
        icon: "icon-code",
        title: "Clean Code",
        description: "The code will be clean and easy to understand to be easily maintained."
      },
      {
        icon: "icon-rocket",
        title: "Fast Loading",
        description: "The website will be fast loading to provide the best user experience."
      },
      {
        icon: "icon-cloud-upload",
        title: "Deployment",
        description: "Deploy your website on the cloud to be easily accessed from anywhere."
      },
      {
        icon: "icon-pencil",
        title: "Domain and Hosting",
        description: "I can provide you with a domain and hosting for your website."
      },
      {
        icon: "ion-ios-cloud-circle",
        title: "AWS solutions",
        description: "I can provide you with AWS solutions to get a fair deal and save costs for your website."
      },
      {
        icon: "ion-md-fastforward",
        title: "CI/CD pipeline",
        description: "I can provide you with a CI/CD pipeline to automate your development process."
      },
      {
        icon: "icon-gear",
        title: "SEO Friendly",
        description: "The website will be SEO friendly to be easily found on search engines."
      },
      {
        icon: "icon-shopping-cart",
        title: "E-commerce store",
        description: "I can provide you with an e-commerce store to sell your products online."
      },
      {
        icon: "icon-layers",
        title: "Websites for All professions",
        description: "Sure I will provide websites for all professions too."
      },
      {
        icon: "icon-share",
        title: "Social Websites and Blogging",
        description: "Even if you want social website or a blogging website I can provide you that."
      },
      {
        icon: "icon-lock",
        title: "Secure Websites",
        description: "The website will be SEO friendly to be easily found on search engines."
      },
      {
        icon: "icon-settings",
        title: "Easy to use Admin Panel",
        description: "The website will provide an easy to use admin panel to manage your website."
      },
      {
        icon: "icon-support",
        title: "24/7 Support",
        description: "I will provide you with 24/7 support to help you with any problem you face."
      },
      {
        icon: "icon-bug",
        title: "Removal of bugs from the websites",
        description: "If you have a website with bugs, I can help you to remove them and add more features if you want."
      },
      {
        icon: "ion-ios-code",
        title: "Web API Integration",
        description: "I can integrate your website with any web API you want."
      },
      {
        icon: "ion-logo-twitter",
        title: "Social Media Integration",
        description: "Integrate your website with all of your social media."
      },
      {
        icon: "icon-credit-card",
        title: "Payment Gateway Integration",
        description: "Integrate your website with any payment gateway you want."
      },
      {
        icon: "icon-map",
        title: "Google Maps",
        description: "Integrate your website with google maps to show your location."
      },
      {
        icon: "icon-database",
        title: "Databases and Data Structures",
        description: "I can help you with databases whatever it is, MySql, MSSQL, Firebase, or anyothers."
      },
      {
        icon: "ion-logo-youtube",
        title: "Video tutorial for easy instructions",
        description: "Your website will be delivered with a video tutorial to help you with using your website."
      },
      {
        icon: "ion-ios-contact",
        title: "Contact Forms",
        description: "Add a contact forms to your website to help your customers contact you easily."
      },
      {
        icon: "ion-md-construct",
        title: "And much more...",
        description: "I can provide you with much more features, just contact me and tell me what you want."
      }
      ]
    }
  },

  mounted: () => { this.$store.dispatch("closeMenu") },
  beforeRouteLeave: (to, from, next) => {
    this.$store.commit("startLoading").commit("stopAnimation");
    next();
  }
});
</script>

<style scoped>
.desc {
  font-size: 1.2rem;
  font-weight: 400;
  color: #777;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
</style>