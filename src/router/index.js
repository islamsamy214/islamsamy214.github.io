import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: function () {
      return import(/* webpackChunkName: "blog" */ "../views/BlogView.vue");
    },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: function () {
      return import(
        /* webpackChunkName: "portfolio" */ "../views/PortfolioView.vue"
      );
    },
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
