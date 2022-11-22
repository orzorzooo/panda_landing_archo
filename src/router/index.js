import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import landing from "@/views/landing/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: landing,
  },
  {
    path: "/objects/object/:id",
    name: "object",
    component: () => import("@/views/object/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
