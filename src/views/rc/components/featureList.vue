<template>
  <div>
    <v-container>
      <h2 class="text-6xl md:text-8xl font-thin uppercase">Purpose</h2>
      <h2 class="text-6xl md:text-8xl font-thin text-gray-600">用途多元</h2>
      <v-divider class="my-10"></v-divider>
      <div>
        <v-row>
          <v-col
            cols="6"
            md="4"
            lg="3"
            v-for="(item, index) in items"
            :key="index"
            class="text-center"
          >
            <h3 class="text-3xl text-gray-700 font-bold mb-5">
              {{ item.title }}
            </h3>
            <p class="text-gray-500">{{ item.text }}</p>
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
          title: "建築工地",
          text: "高檔辦公、住宅、生活用房",
        },
        {
          title: "高速公路",
          text: "替代房車、中途休息高檔酒店",
        },
        {
          title: "行銷中心",
          text: "辦公、接待、公寓用房",
        },
        {
          title: "旅遊配套",
          text: "旅遊民宿酒店、餐飲用房",
        },
        {
          title: "公共建築",
          text: "書店、健身房、文化藝術中心、博物館、辦公用房",
        },
        {
          title: "農村住宅",
          text: "新農村建設的民居用房",
        },
        {
          title: "會所辦公",
          text: "高檔會所、企業總部用房",
        },
        {
          title: "房車營地",
          text: "4S店高端旅居用房，比房車體驗更好",
        },
        {
          title: "康養地產",
          text: "旅遊區養生、 養老用房",
        },
        {
          title: "連鎖賓館",
          text: "城市統一形象、標識的連鎖賓館用房，可以運用智慧化裝修",
        },
        {
          title: "集體宅基地",
          text: "已經拆遷地區過渡住宅用房",
        },
        {
          title: "市政工程",
          text: "書報亭、辦公、公共衛生間、綠化景觀涼亭工程",
        },
        {
          title: "拆遷補償",
          text: "可能拆遷，獲取補償的商業或住宅用房",
        },
        {
          title: "開發用地",
          text: "臨時未開發，或開 發週期長，位置又好的空閒土地，可以臨時賓館、餐飲、商業用房",
        },
        {
          title: "產品展廳",
          text: "各種產品展廳、快閃店（用時移走)",
        },
      ],
    };
  },
};
</script>
