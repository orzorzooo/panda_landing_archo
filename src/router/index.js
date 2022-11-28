import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import landing from "@/views/landing/index.vue";
import page404 from "@/views/404.vue";
import { authenticated } from "@/api/guard";

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
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/user/",
    component: () => import("@/views/user/index.vue"),
    redirect: { name: "home" },
    children: [
      {
        path: "/user/home",
        name: "home",
        component: () => import("@/views/user/home.vue"),
        meta: { requireAuth: true },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: page404,
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // ...
  const auth = authenticated();
  if (to.meta.requireAuth && to.name !== "login" && !auth) next({ name: "login" });
  next();
});

export default router;
