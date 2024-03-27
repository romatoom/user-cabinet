import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

import "./assets/scss/index.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
