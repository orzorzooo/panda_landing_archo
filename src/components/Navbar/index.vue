<template>
  <div
    ref="navbar"
    class="transition fixed w-full z-60 bg-gray-100 bg-opacity-0 text-white"
  >
    <!-- standard -->
    <div class="h-20">
      <div
        class="flex h-full px-20 justify-between items-center"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <NavItem :routeName="'landing'"
          ><div class="text-2xl font-bold">PANDA</div></NavItem
        >
        <v-spacer></v-spacer>

        <NavItem :routeName="'login'" v-if="!user"
          ><div class="text-2xl font-bold">登入</div></NavItem
        >
        <NavItem v-else :routeName="'login'"
          ><div class="text-2xl font-bold" @click="logout">登出</div></NavItem
        >
      </div>

      <!-- MOBILE -->

      <div v-else class="flex h-full w-full px-5 items-center">
        <NavItem :routeName="'landing'"
          ><div class="text-2xl font-bold">PANDA</div></NavItem
        >
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          :dark="!scroll"
          class=""
          @click="drawer = true"
        ></v-app-bar-nav-icon>
      </div>
      <v-navigation-drawer v-model="drawer" right absolute dark height="100vh">
        <div class="w-full py-10">
          <v-list>
            <v-list-item link>
              <NavItem :routeName="'landing'"
                ><div class="text-xl font-bold text-orange-200/70">
                  首頁
                </div></NavItem
              >
            </v-list-item>
            <v-list-item link v-if="user">
              <NavItem :routeName="'home'"
                ><div class="text-xl font-bold text-orange-200/70">
                  我的物件
                </div></NavItem
              >
            </v-list-item>
            <v-divider dark class="mb-5"></v-divider>
            <v-list-item v-if="!user">
              <NavItem :routeName="'login'"
                ><div class="text-xl font-bold text-orange-200/70">
                  登入
                </div></NavItem
              >
            </v-list-item>

            <v-list-item v-else @click.prevent="logout">
              <NavItem :routeName="'login'"
                ><div class="text-xl font-bold text-orange-200/70">
                  登出
                </div></NavItem
              >
            </v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>
    </div>
  </div>
</template>
<script>
import NavItem from "./components/navItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { NavItem },
  data() {
    return {
      company_name: "PANDA",
      scroll: false,
      drawer: false,
      routes: [{ title: "登入", routeName: "login" }],
    };
  },
  methods: {
    ...mapActions("user", ["logout"]),

    onScrollTrigger(navbar, value) {
      if (window.pageYOffset > value) {
        navbar.classList.add("bg-opacity-100", "text-gray-500");
        this.scroll = true;
      } else {
        navbar.classList.remove("bg-opacity-100", "text-gray-500");
        this.scroll = false;
      }
    },
  },
  computed: {
    ...mapGetters("user", ["user"]),
  },
  mounted() {
    const _this = this;
    const navbar = this.$refs.navbar;
    _this.onScrollTrigger(navbar, 100);
    window.addEventListener("scroll", () => {
      _this.onScrollTrigger(navbar, 100);
    });
  },
};
</script>
