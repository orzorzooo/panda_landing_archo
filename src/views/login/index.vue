<template>
  <div class="h-full bg-gray-700">
    <div class="flex h-full justify-center items-center text-orange-300/80">
      <v-container class="h-full pb-0">
        <v-row class="h-full" no-gutters>
          <v-col cols="12" md="6" align-self="center" class="text-center">
            <div class="text-orange-300/80 text-xl font-bold my-10 mt-20">
              登入
            </div>
            <div class="px-10">
              <v-text-field
                label="email"
                dark
                outlined
                prepend-icon="mdi-account"
                v-model="form.email"
                :error-messages="error.password ? error.password : ''"
              ></v-text-field>
              <v-text-field
                label="password"
                :error-messages="error.password ? error.password : ''"
                dark
                outlined
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                counter
                v-model="form.password"
                @keydown.enter.prevent="login"
              ></v-text-field>
              <div class="text-right my-5">
                <v-btn
                  outlined
                  color=""
                  dark
                  width="100%"
                  x-large
                  @click="login"
                  >登入</v-btn
                >
              </div>
              <div>
                還不是會員?
                <a
                  dark
                  x-large
                  text
                  plain
                  class="p-0 !text-white ml-3"
                  @click.prevent="$router.push({ name: 'register' })"
                  >註冊</a
                >
              </div>
            </div>
          </v-col>
          <v-col align-self="end">
            <v-img :src="bgImg"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { get, post } from "@/api/request";
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      bgImg: require("@/assets/images/sofa.svg"),
      showPassword: false,
      form: {
        email: "",
        password: "",
      },
      error: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapMutations("user", ["setToken", "setUser", "setLogout"]),
    async login() {
      try {
        const data = await post({
          data: this.form,
          type: "auth",
          collection: "login",
        });
        console.log("login", data);
        if (!data) throw Error;
        this.setToken({
          token: data.access_token,
          refresh_token: data.refresh_token,
        });
        const user = await this.getUserInfo();
        if (!user) throw Error;
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log("loginfail");
        this.setLogout();
        this.error.password = "使用者帳號或密碼錯誤";
        window.location.reload();
      }
    },
    async getUserInfo() {
      const data = await get({ type: "users", collection: "me" });
      this.setUser(data);
      console.log(data);
      return data;
    },
  },
};
</script>
