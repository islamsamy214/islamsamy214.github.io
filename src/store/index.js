import { createStore } from "vuex";

export default createStore({
  state: {
    loading: true,
    pageAnimated: true,
    portfolioProjects: [
      {
        id: 1,
        title: "Even the all-powerful Pointing has no control",
        image: "assets/images/work-1.jpg",
        category: "Illustration",
        description:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.",
      },
      {
        id: 2,
        title: "Even the all-powerful Pointing has no control",
        image: "assets/images/work-2.jpg",
        category: "Branding",
        description:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.",
      },
      {
        id: 3,
        title: "Even the all-powerful Pointing has no control",
        image: "assets/images/work-3.jpg",
        category: "Web Design",
        description:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.",
      },
      {
        id: 4,
        title: "Even the all-powerful Pointing has no control",
        image: "assets/images/work-4.jpg",
        category: "Web Design",
        description:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.",
      },
      {
        id: 5,
        title: "Even the all-powerful Pointing has no control",
        image: "assets/images/work-5.jpg",
        category: "Branding",
        description:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.",
      },
      {
        id: 6,
        title: "Even the all-powerful Pointing has no control",
        image: "assets/images/work-6.jpg",
        category: "Illustration",
        description:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.",
      },
    ],
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    isAnimated(state) {
      return state.pageAnimated;
    },
    getPortfolioProjects(state) {
      return state.portfolioProjects;
    },
  },
  mutations: {
    closeMenu() {
      let bodyElement = document.getElementsByTagName("body")[0];
      bodyElement.classList.remove("menu-show");
    },
    stopLoading(state) {
      state.loading = false;
    },
    startLoading(state) {
      state.loading = true;
    },
    stopAnimation(state) {
      state.pageAnimated = false;
    },
    startAnimation(state) {
      state.pageAnimated = true;
    },
  },
  actions: {
    closeMenu({ commit }) {
      commit("closeMenu");
    },
  },
  modules: {},
});
