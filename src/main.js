import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "windi.css";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({});
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
