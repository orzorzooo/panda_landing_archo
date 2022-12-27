<template>
  <div>
    <div class="about">
      <!-- <h1>about</h1> -->
      <v-container>
        <h1 class="text-6xl md:text-8xl text-gray-500 font-thin">
          MARKET <br />ANALYSIS
        </h1>
        <div
          v-for="(item, index) in features"
          :key="index"
          class="mb-10 text-gray-500"
        >
          <p class="text-xl">{{ item.text }}</p>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      features: [
        {
          text: "裝配式建築經年來在市場逐漸得到大眾認可，有著建造時間短，成本較低的優勢。可移動的智慧集成化建築，在市場上還是一個新興的概念，是未來的發展方向，產品美觀，靈活 性高，技術集成高，品質好，產品區別于傳統住宿，無視各類複雜地形限制，在不破壞環境的原則下，實現智慧生態，住在風景裡的旅遊訴求。",
        },
        {
          text: "產品已經實現批量投產，產品測試防水、保溫。隔熱、材料均達到國際標準。產品具有科技感的金屬外殼和全景大片式鋼化落地玻璃的單艙體設計，身臨其境。",
        },
        {
          text: "全屋採用環保材料，精裝入戶，風格輕奢自然，于環境融合一體。可內嵌抽取式排汙設計，環保便捷。0污染。鋼化結構設計，抗12級以上颱風，外裝飾鍍鋅板專業材料，抗腐蝕， 防潮濕。特殊保溫防寒設計，無懼條件，最低可達到零下30度。",
        },
      ],
    };
  },
};
</script>
<style scoped>
.about {
  /* border-top-right-radius: 20rem; */
}
</style>
