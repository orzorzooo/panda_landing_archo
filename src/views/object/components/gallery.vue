<template>
  <div class="bg-gray-300">
    <div v-if="!$vuetify.breakpoint.xsOnly">
      <v-container fluid class="p-0">
        <v-row no-gutters>
          <v-col cols="12" sm="6" md="6" @click="dialog = true">
            <v-hover v-slot="{ hover }">
              <v-img :src="featureImg" height="100%">
                <v-fade-transition>
                  <div
                    v-if="hover"
                    class="flex align-center justify-center transition-fast-in-fast-out bg-gray-800/50 text-white text-2xl font-bold cursor-pointer"
                    style="height: 100%"
                  >
                    <div>看更多圖片</div>
                  </div>
                </v-fade-transition>
              </v-img>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-row class="" no-gutters>
              <v-col cols="12" sm="12" md="6" v-for="(item, i) in galleryImg" :key="i" @click="dialog = true">
                <v-hover v-slot="{ hover }">
                  <v-img :src="assetURL(item.directus_files_id)" height="100%">
                    <v-fade-transition>
                      <div
                        v-if="hover"
                        class="flex align-center justify-center transition-fast-in-fast-out bg-gray-800/50 text-white text-2xl font-bold cursor-pointer"
                        style="height: 100%"
                      >
                        <div>看更多圖片</div>
                      </div>
                    </v-fade-transition>
                  </v-img>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="dialog">
        <div class="h-80vh bg-gray-800 p-10">
          <vueper-slides
            fade
            :infinite="true"
            :autoplay="true"
            :pauseOnHover="false"
            :pauseOnTouch="false"
            fixed-height="100%"
            class="no-shadow"
          >
            <vueper-slide v-for="(slide, i) in slides" :key="i">
              <template #content>
                <v-img :src="slide.imgURL" height="100%" contain> </v-img>
              </template>
            </vueper-slide>
          </vueper-slides>
        </div>
      </v-dialog>
    </div>
    <!-- end of desktop -->

    <!-- mobile -->
    <div v-else>
      <div class="h-30vh">
        <vueper-slides
          fade
          :infinite="true"
          :autoplay="true"
          :pauseOnHover="false"
          :pauseOnTouch="false"
          fixed-height="100%"
          class="no-shadow"
        >
          <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.imgURL">
            <!-- <template #content>
              <v-img :src="slide.imgURL" height="100%" contain> </v-img>
            </template> -->
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>
<script>
import { get, assetURL } from "@/api/request";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  props: ["files"],
  methods: { assetURL },
  components: { VueperSlides, VueperSlide },
  computed: {
    img(id) {
      return assetURL(id);
    },
    featureImg() {
      if (this.files.length == 0) return;
      return assetURL(this.files[0].directus_files_id, {
        quality: 50,
        width: 1024,
      });
    },
    galleryImg() {
      return this.files.filter((item, i) => {
        if (this.$vuetify.breakpoint.smOnly) return i > 0 && i < 3;
        return i > 0 && i < 5;
      });
    },
    slides() {
      return this.files.map((item) => {
        return {
          imgURL: assetURL(item.directus_files_id),
        };
      });
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
// https://panda.api.orzorzooo.com/assets/3f9263b2-fbd2-4200-8e02-d53981e84678?&width=1024&transforms=[[%22blur%22,10]]
</script>
