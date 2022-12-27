<template>
  <v-container fluid class="p-0">
    <v-img
      :src="featureImg"
      height="100vh"
      gradient="to bottom right, rgba(0,0,0,.9), rgba(0,0,0,.3)"
    >
      <v-container class="h-full">
        <v-row align="center" class="h-full p-10">
          <v-col cols="12" sm="12" md="6">
            <div :class="headerBlur ? headerBlurClass : ''" data-aos="fade">
              <div class="text text-yellow-400/80 mb-3" data-aos="fade">
                {{ property.address }}
              </div>
              <div
                class="text-5xl text-white"
                data-aos="fade"
                data-aos-delay="100"
              >
                {{ property.name }}
              </div>
              <HeaderList :property="property"></HeaderList>
            </div>
          </v-col>
          <v-col sm="12"> </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-container>
</template>
<script>
import { get, assetURL } from "@/api/request";
import HeaderList from "./headerList.vue";
import img from "@/assets/images/img-icon-white.svg";
export default {
  props: ["property"],
  components: { HeaderList },
  data() {
    return {
      img,
    };
  },
  computed: {
    featureImg() {
      if (this.property.files.length == 0) return img;
      return assetURL(this.property.files[0].directus_files_id, {
        quality: 50,
        width: 1920,
        // transforms: `[["blur",7]]`,
      });
    },
  },
  data() {
    return {
      headerBlur: false,
      headerBlurClass:
        "bg-gray-100/10 rounded-xl p-5 backdrop-filter backdrop-blur-sm border-1 border-gray-100/10 h-60vh mt-30",
    };
  },
};
</script>
