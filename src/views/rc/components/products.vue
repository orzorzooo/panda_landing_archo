<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-for="(item, index) in models" :key="index">
          <v-card rounded class="rounded-xl">
            <v-card-title></v-card-title>
            <div class="text-center">
              <v-icon x-large color="gray darken-2"> {{ item.icon }} </v-icon>
            </div>
            <v-card-text>
              <div class="text-center mb-10">
                <h2 class="text-xl font-bold">{{ item.title }}</h2>
              </div>
              <v-divider class="mb-5"></v-divider>
              <p>{{ item.main }}</p>
              <v-divider class="mb-5"></v-divider>
              <p>{{ item.inside }}</p>
              <v-divider class="mb-5"></v-divider>
              <p>{{ item.bathroom }}</p>
              <v-divider class="mb-5"></v-divider>
              <p>{{ item.hardware }}</p>
              <v-divider class="mb-5"></v-divider>
              <p>{{ item.option }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center text-gray-600 my-10">
        <p>開放客戶定制需求（具體方案需探討）</p>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      models: [
        {
          icon: "mdi-octagram",
          title: "基礎型",
          main: " 鋼結構框架，外飾飾面板（鋁制）、隔熱、 保溫（100mm聚氨保溫層）、外牆玻璃 （6+12A+6中空LOW-E玻璃）、入戶門（智能 門禁）腳撐。",
          inside:
            "天花（竹炭纖維板）、牆面（竹炭纖維板）、 地面（高級複合木地板）、室內燈效（ 3000K 暖黃光）室外燈效（4000K暖白光）、窗簾 （電動窗簾）、智控系統（燈光、窗簾語音控 制）、消防煙霧報警、插座面板（品牌開關面 板）",
          bathroom:
            "馬桶（品牌馬桶）、熱水器（60L儲水式熱 水器）、台盆（品牌）龍頭（品牌） ",
          hardware:
            "空調（掛壁式1.5P空調2台）、熱水器、浴 霸（暖風式三合一集成浴霸） ",
          option: "地暖（電地暖）、水管防凍、投影儀、樓梯",
        },
        {
          icon: "mdi-hexagram",
          title: "標準型",
          main: " 钢鋼結構框架，外飾飾面板（鋁制）、隔熱、保溫（100mm聚氨保溫層）、外牆玻璃 （6+12A+6中空LOW-E玻璃）、入戶門（智能門禁）腳撐。",
          inside:
            "天花（竹炭纖維板）、牆面（竹炭纖維板）、 地面（高級複合木地板）、室內燈效（ 3000K 暖黃光）室外燈效（4000K暖白光）、窗簾 （電動窗簾）、智控系統（燈光、窗簾語音控 制）、消防煙霧報警、插座面板（品牌開關面 板）",
          bathroom:
            "馬桶（品牌馬桶）、熱水器（60L儲水式熱 水器）、台盆（品牌）龍頭（品牌） ",
          hardware:
            "空調（掛壁式1.5P空調2台）、熱水器、浴 霸（暖風式三合一集成浴霸） ",
          option: "地暖（電地暖）、水管防凍、投影儀、樓梯",
        },
        {
          icon: "mdi-shield-star",
          title: "豪華型",
          main: " 鋼結構框架，外飾飾面板（鋁制）、隔熱、 保溫（100mm聚氨保溫層）、外牆玻璃 （6+12A+6中空LOW-E玻璃）、入戶門（智能 門禁）腳撐。",
          inside:
            "天花（竹炭纖維板）、牆面（竹炭纖維板）、 地面（高級複合木地板）、室內燈效（ 3000K 暖黃光）室外燈效（4000K暖白光）、窗簾 （電動窗簾）、智控系統（全屋集成控制系 統，含背景音樂）、消防煙霧報警、插座面板 （品牌開關開關面板），傢俱：床、床墊、沙發、茶几。",
          bathroom:
            "馬桶（品牌馬桶）、熱水器（60L儲水式熱 水器）、台盆（品牌）龍頭（品牌） ",
          hardware:
            "冰箱、空調（品牌風管式空調）、熱水器 （即熱式熱水器）、浴霸（暖風式三合一 集成浴霸）投影儀",
          option: "地暖（電地暖）、水管防凍、投影儀、樓梯",
        },
      ],
    };
  },
};
</script>
