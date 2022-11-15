<template>
  <div class="h-100vh bg-orange-400">
    <vueper-slides
      fixed-height="100vh"
      :parallax="true"
      fade
      :bullets="false"
      :arrows="false"
      :infinite="true"
      :autoplay="true"
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i">
        <template #content>
          <v-img :src="slide.image" height="100%" gradient="to top right, rgba(100,100,100,.33), rgba(100,100,100,.7)">
            <v-container class="h-full text-white">
              <v-row class="h-full" align="center">
                <v-col sm="12" md="6">
                  <div class="text-6xl font-bold text-left">{{ slide.title }}</div>
                  <div>
                    {{ slide.content }}
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>
<script>
import bg from "@/assets/images/landing-hero-bg.png";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      bg,
      slides: [
        {
          title: "悟見",
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
          image:
            "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "好居",
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
          image:
            "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    };
  },
};
</script>
