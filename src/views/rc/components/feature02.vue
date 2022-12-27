<template>
  <v-container fluid class="py-20 mt-20">
    <v-row>
      <v-col cols="12" md="6" class="p-0">
        <div
          class="d-flex flex-column justify-end content-end w-full h-screen-sm bg-yellow-800 mr-0 borderR bg"
        ></div>
      </v-col>
      <v-col cols="12" md="6">
        <v-container>
          <div class="text-gray-500">
            <h1 class="text-6xl md:text-8xl font-thin">BUILD EASY</h1>
          </div>
          <ul class="text-gray-500 mt-10 !pl-0">
            <li class="">
              <h2 class="text-3xl font-bold mb-3">不限地形，生態開發</h2>
              <p class="text-xl">
                不打地基、適用於全部地形、不破壞生態環境、無建築廢料生態環保。
              </p>
            </li>
            <li>
              <h2 class="text-3xl font-bold mb-3">整體預製，快速安裝</h2>
              <p class="text-xl">
                全屋採用環保材料，產品測試防水、保溫、隔熱，材料均已達到國際標準。
              </p>
            </li>
            <li>
              <h2 class="text-3xl font-bold mb-3">現代科技，網紅打卡</h2>
              <p class="text-xl">
                配置全智慧家電系統，外觀設計前景視野，自帶流量。
              </p>
            </li>
            <li>
              <h2 class="text-3xl font-bold mb-3">拆裝方便，靈活用地</h2>
              <p class="text-xl">
                整體運輸、整裝整拆，適用於各類用地，限制較少。
              </p>
            </li>
          </ul>
        </v-container>
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
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}
.bg {
  background-image: url("@/assets/images/rc/feature-02.jpg");
  background-size: cover;
  /* border-bottom-right-radius: 30rem; */
}
</style>
