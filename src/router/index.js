import Vue from "vue";
import VueRouter from "vue-router";

import AppMovies from "../components/AppMovies";
import Login from "../components/Login";
import Register from "../components/Register";
import SingleMovie from "../components/SingleMovie";
import { requiresAuth, guestOnly } from "./guards";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "movies" },
  {
    path: "/movies",
    component: AppMovies,
    name: "movies",
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: { guestOnly: true }
  },
  {
    path: "/register",
    component: Register,
    name: "register",
    meta: { guestOnly: true }
  },
  {
    path: "/movies/:id",
    component: SingleMovie,
    name: "single-movie",
    meta: { requiresAuth: true }
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  Promise.resolve(to)
    .then(requiresAuth)
    .then(guestOnly)
    .then(() => {
      next();
    })
    .catch(redirect => {
      next(redirect);
    });
});

export default router;
