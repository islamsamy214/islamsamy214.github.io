import { createStore } from "vuex";

export default createStore({
  state: {
    loading: true,
    pageAnimated: true,
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    isAnimated(state) {
      return state.pageAnimated;
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
