<template>
  <div class="h-full bg-gray-700">
    <div class="flex h-full justify-center items-center text-orange-300/80">
      <v-container class="h-full pb-0">
        <v-row class="h-full" no-gutters>
          <v-col cols="12" md="6" align-self="center" class="text-center">
            <div class="px-10">
              <div class="text-orange-300/80 text-xl font-bold my-10 mt-20">
                註冊完成，請點此登入
              </div>
              <v-btn
                x-large
                width="100%"
                dark
                outlined
                @click="$router.push({ name: 'login' })"
                >登入</v-btn
              >
            </div>
          </v-col>
          <v-col align-self="end">
            <!-- <v-img :src="bgImg"></v-img> -->
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
