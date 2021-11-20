import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/css/style.scss";
import AOS from "aos";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store).use(router).use(AOS.init()).mount("#app");
