<template>
  <section class="ftco-section contact-section">
    <div class="container mt-5">
      <div class="row d-flex mb-5 contact-info">
        <div class="col-md-12 mb-4">
          <h2 class="h4">Contact Information</h2>
        </div>
        <div class="w-100"></div>
        <div class="col-md-4">
          <p><span>Address:</span> Dubai, UAE</p>
        </div>
        <div class="col-md-4">
          <p>
            <span>Phone:</span>
            <a href="tel:+971505416038"> (+971) 50 541 6038</a>
          </p>
        </div>
        <div class="col-md-4">
          <p>
            <span>Email:</span>
            <a href="mailto:islamsamy214@gmail.com"> islamsamy214@gmail.com</a>
          </p>
        </div>
      </div>
      <!-- <div class="row block-9">
        <div class="col-md-6 pr-md-5">
          <form action="#">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Subject" />
            </div>
            <div class="form-group">
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                class="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Send Message"
                class="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>
        <div class="col-md-6" id="map"></div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
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
