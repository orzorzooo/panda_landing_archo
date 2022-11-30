<template>
  <div class="h-full bg-gray-700">
    <div class="flex h-full justify-center items-center text-orange-300/80">
      <v-container class="h-full pb-0">
        <v-row class="h-full" no-gutters>
          <v-col cols="12" md="6" align-self="center" class="text-center">
            <div class="text-orange-300/80 text-xl font-bold my-10 mt-20">
              註冊新帳號
            </div>
            <div class="px-10">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  label="email"
                  dark
                  outlined
                  prepend-icon="mdi-account"
                  v-model="form.email"
                  :rules="[rules.required, rules.email]"
                  :error-messages="error.email ? error.email : ''"
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
                  :rules="[rules.required]"
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
                    @click.prevent="register"
                    >註冊</v-btn
                  >
                </div>
              </v-form>
            </div>
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
      valid: true,
      form: {
        email: "",
        password: "",
        role: "34588429-4738-4972-94ba-7aaa0cf9e266",
      },
      error: {
        email: null,
        password: null,
      },
      rules: {
        required: (value) => !!value || "這是必填欄位哦",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "請輸入正確的email";
        },
      },
      info: {
        color: "error",
        title: "成功",
        text: "註冊成功",
      },
      dialog: false,
    };
  },
  methods: {
    ...mapMutations("user", ["setToken", "setUser", "removeToken"]),
    async register() {
      const emailChecked = await this.checkEmail();
      if (!emailChecked) {
        return;
      }
      await this.validate();
      console.log(this.valid);
      if (!this.valid) return;

      console.log(emailChecked);

      const data = await post({ data: this.form, type: "users" });
      this.$router.push({ name: "registerSuccess" });
    },

    async checkEmail() {
      const data = await post({
        data: this.form,
        type: "flows/trigger",
        collection: "edf1084d-676b-4b15-84ec-eb6fdcb41d1a",
      });
      if (!data) {
        this.error.email = "email已被使用";
        return false;
      }
      this.error.email = "";
      return true;
    },

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
