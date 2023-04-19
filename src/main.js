import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";
import FooterBar from "./components/FooterBar.vue";

const app = createApp(App);

app.component("side-bar", SideBar);
app.component("top-bar", TopBar);
app.component('footer-bar', FooterBar)

app.use(store);
app.use(router);
app.mount("#app");
