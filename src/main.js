import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import { store } from "./store";

import App from "./App.vue";
import AppMovies from "./components/AppMovies";
import Login from "./components/Login";
import Register from "./components/Register";
import SingleMovie from "./components/SingleMovie";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: "/", redirect: "movies" },
  { path: "/movies", component: AppMovies, name: "movies" },
  { path: "/login", component: Login, name: "login" },
  { path: "/register", component: Register, name: "register" },
  { path: "/movies/:id", component: SingleMovie, name: "single-movie" }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
