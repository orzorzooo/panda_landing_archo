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
              ></v-text-field>
              <v-text-field
                label="password"
                dark
                outlined
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                counter
              ></v-text-field>
              <div class="text-right mt-5">
                <v-btn outlined color="" dark width="100%" x-large>登入</v-btn>
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
export default {
  data() {
    return {
      bgImg: require("@/assets/images/sofa.svg"),
      showPassword: false,
    };
  },
};
</script>
