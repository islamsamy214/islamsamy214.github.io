import { createStore } from "vuex";

export default createStore({
  state: {
    loading: true,
    pageAnimated: true,
    portfolioProjects: [
      {
        id: 1,
        title: "A World of Art",
        image: "assets/images/a-world-template-min.webp",
        category: "Traveling and art gallery website",
        url: "https://islamsamy214.github.io/a-world-template/",
        description:
          "A World of Art is a website for a fictional art gallery. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 2,
        title: "BEASTs Gym",
        image: "assets/images/BEASTsGym-template-min.webp",
        category: "Gym and bodybuilding webiste",
        url: "https://islamsamy214.github.io/BEASTsGym-template/",
        description:
          "BEASTsGym is website for a fictional gym. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript",
      },
      {
        id: 3,
        title: "Grad School",
        image: "assets/images/grad-school-template-min.webp",
        category: "Educational website",
        url: "https://islamsamy214.github.io/grad-school-template/",
        description:
          "Grad School is a website for a fictional school. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 4,
        title: "Medic Care",
        image: "assets/images/medic-care-template-min.webp",
        category: "Medical website",
        url: "https://islamsamy214.github.io/medic-care-template/",
        description:
          "Medic Care is a website for a fictional hospital. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 5,
        title: "New Business",
        image: "assets/images/NewBusiness-bootstrap-business-template-min.webp",
        category: "Business website",
        url: "https://islamsamy214.github.io/NewBusiness-bootstrap-business-template/",
        description:
          "New Business is a website for a fictional business. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 7,
        title: "SEO MASTER",
        image: "assets/images/SEO-MASTER-min.webp",
        category: "Digital marketing website",
        url: "https://islamsamy214.github.io/SEO-MASTER/",
        description:
          "SEO MASTER is a website for a fictional digital marketing agency. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 8,
        title: "Business Landing Page",
        image: "assets/images/template-business-landing-page-min.webp",
        category: "Business website",
        url: "https://islamsamy214.github.io/template-business-landing-page/",
        description:
          "Business Landing Page is a website for a fictional business. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 9,
        title: "Traveler",
        image: "assets/images/traveler-template-min.webp",
        category: "Traveling website",
        url: "https://islamsamy214.github.io/traveler-template/",
        description:
          "Traveler is a website for a fictional travel agency. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 10,
        title: "WCTV",
        image: "assets/images/WCTV-template-min.webp",
        category: "Home Camera website",
        url: "https://islamsamy214.github.io/WCTV-template/",
        description:
          "WCTV is a website for a fictional home camera company. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 11,
        title: "just maried",
        image: "assets/images/just-maried-template-min.webp",
        category: "Wedding website",
        url: "https://islamsamy214.github.io/just-maried-template/",
        description:
          "WEDDING is a website for a fictional wedding planner. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 12,
        title: "Interior",
        image: "assets/images/interior-template-min.webp",
        category: "Interior design website",
        url: "https://islamsamy214.github.io/interior-template/",
        description:
          "Interior is a website for a fictional interior design company. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
      },
      {
        id: 13,
        title: "Cleaning",
        image: "assets/images/cleaning-template-min.webp",
        category: "Cleaning company website",
        url: "https://islamsamy214.github.io/cleaning-template/",
        description:
          "Cleaning is a website for a fictional cleaning company. It is a fully responsive website that can be used for any type of business or portfolio website. It is built with HTML, CSS, and JavaScript.",
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
