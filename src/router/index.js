import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/about/AboutView.vue");
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: function () {
      return import(/* webpackChunkName: "blog" */ "../views/blog/BlogView.vue");
    },
    children: [
      {
        path: "",
        name: "blog-details",
        component: function () {
          return import(
            /* webpackChunkName: "blog-home" */ "../views/blog/BlogDetailsView.vue"
          );
        },
      },
    ],
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: function () {
      return import(
        /* webpackChunkName: "portfolio" */ "../views/portfolio/PortfolioView.vue"
      );
    },
    children: [
      {
        path: "",
        name: "portfolio-details",
        component: function () {
          return import(
            /* webpackChunkName: "portfolio-home" */ "../views/portfolio/PortfolioDetailsView.vue"
          );
        },
        params: true,
      },
    ],
  },
  {
    path: "/services",
    name: "services",
    component: function () {
      return import(
        /* webpackChunkName: "services" */ "../views/ServicesView.vue"
      );
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: function () {
      return import(
        /* webpackChunkName: "contact" */ "../views/ContactView.vue"
      );
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: function () {
      return import(
        /* webpackChunkName: "not-found" */ "../views/NotFoundView.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;
