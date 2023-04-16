import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";

const app = createApp(App);

app.component("side-bar", SideBar);
app.component("top-bar", TopBar);

app.use(store);
app.use(router);
app.mount("#app");
