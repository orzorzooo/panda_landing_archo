<template>
  <div>
    <v-container>
      <div>
        <h2 class="text-6xl md:text-8xl font-thin uppercase">shipment</h2>
        <h2 class="text-6xl md:text-8xl font-thin text-gray-600">運輸便利</h2>
        <v-divider class="my-10"></v-divider>
      </div>
      <div class="text-center text-3xl mb-10">
        <h2>獨特的裝配式、模組化、工期短、可移動設計生產</h2>
      </div>
      <div>
        <v-row>
          <v-col cols="12" md="4" v-for="(item, index) in items" :key="index">
            <v-card outlined color="transparent" class="text-center">
              <div class="mb-5">
                <v-icon x-large color="gray darken-2"> {{ item.icon }} </v-icon>
              </div>
              <div class="text-xl font-bold">
                {{ item.title }}
              </div>
              <v-card-text class="text-gray text-left text-lg">
                {{ item.text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-truck",
          title: "出廠運輸",
          text: "產品外部包裝之後，採用大型平板托運車運輸。產品從工廠到營地現場旅途中，將採用嚴密的安全保護措施，保證在運輸中安全安穩",
        },
        {
          icon: "mdi-truck-fast",
          title: "產品吊裝",
          text: "運輸車到達當地後，需採用大型吊車進行吊裝落地。產品到達專案地後需結合當地實際情況，採用合適吊裝設備，產品設計吊點並提供噸位資料",
        },
        {
          icon: "mdi-truck-check",
          title: "安裝基座",
          text: "硬化地可以直接落地安裝，其他地質環境會配合項目施工方進行基建。產品基座安裝需根據土質情況，制定樁基礎開挖施工方案，保證產品落地的安全穩定",
        },
      ],
    };
  },
};
</script>
