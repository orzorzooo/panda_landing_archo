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
    path: "/register",
    name: "register",
    component: () => import("@/views/login/register.vue"),
  },
  {
    path: "/register/success",
    name: "registerSuccess",
    component: () => import("@/views/login/success.vue"),
  },
  {
    path: "/user/",
    component: () => import("@/views/user/index.vue"),
    redirect: { name: "home" },
    children: [
      {
        path: "home",
        name: "home",
        // redirect: { name: "properties" },
        component: () => import("@/views/user/home.vue"),
        meta: { requireAuth: true },
      },
      {
        path: "properties",
        name: "properties",
        component: () => import("@/views/user/properties/index.vue"),
        meta: { requireAuth: true },
      },
      {
        path: "properties/update",
        name: "propertiesUpdate",
        component: () => import("@/views/user/properties/update.vue"),
        meta: { requireAuth: true },
      },
      {
        path: "reserve/:id",
        name: "reserve",
        component: () => import("@/views/user/reserve.vue"),
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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

router.beforeEach(async (to, from, next) => {
  // ...
  const auth = await authenticated();
  console.log(auth);
  if (to.meta.requireAuth && to.name !== "login" && !auth)
    next({ name: "login" });
  next();
});

export default router;
