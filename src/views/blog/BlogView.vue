<template>
  <router-view></router-view>
  <section class="ftco-section">
    <div class="container mt-5">
      <div class="row justify-content-center mb-5 pb-5">
        <div class="col-md-7 text-center heading-section ftco-animate">
          <span>Blog</span>
          <h2>Read our blog</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 ftco-animate" v-for="i in 15" :key="i">
          <div class="blog-entry">
            <router-link
              :to="{ name: 'blog-details', params: { id: i } }"
              class="block-20"
              style="background-image: url('assets/images/image_1.jpg')"
            >
            </router-link>
            <div class="text p-4 d-block">
              <div class="meta mb-3">
                <div><a href="#">July 12, 2018</a></div>
                <div><a href="#">Admin</a></div>
                <div>
                  <a href="#" class="meta-chat"
                    ><span class="icon-chat"></span> 3</a
                  >
                </div>
              </div>
              <h3 class="heading">
                <a href="#"
                  >Even the all-powerful Pointing has no control about the blind
                  texts</a
                >
              </h3>
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
