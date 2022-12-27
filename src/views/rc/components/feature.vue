<template>
  <v-container fluid class="py-20 mt-20">
    <v-row>
      <v-col cols="12" md="4">
        <v-container class="text-gray-500">
          <h1 class="text-6xl md:text-8xl font-thin">LIVE FREE</h1>
          <h2 class="text-3xl font-bold">不限地形，生態開發</h2>
          <p class="text-xl">
            移動房屋，被廣泛應用於旅遊度假村、房車營地、創意園、商鋪等領域，為特色小鎮鋪設
            生態旅遊、移動地產、移動零售、打造旅居商一體的“移動商機”，自由組合可以靈活應用在不
            同的小鎮需求。
          </p>
        </v-container>
        <div class="text-gray-500"></div>
      </v-col>
      <v-col cols="12" md="8" class="p-0">
        <div
          class="d-flex flex-column justify-end content-end w-full h-md bg-yellow-800 mr-0 borderR"
        >
          <h1></h1>
          <div class="px-10">
            <img
              :src="featureImg"
              class="w-full translate-y-6 relative top-8"
            />
          </div>

          <!-- <v-img :src="featureImg"></v-img> -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import featureImg from "@/assets/images/rc/feature-01.png";
export default {
  data() {
    return {
      featureImg,
    };
  },
};
</script>
<style scoped>
.borderR {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}
</style>
