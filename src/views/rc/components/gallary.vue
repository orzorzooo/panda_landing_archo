<template>
  <div class="my-20">
    <v-container>
      <VueSlickCarousel
        v-bind="setting"
        :arrows="false"
        @afterChange="afterChange"
        style="height: 400px"
      >
        <div v-for="(item, i) in galleries" :key="i">
          <v-img :src="item.src" height="400px" />
        </div>
      </VueSlickCarousel>
    </v-container>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      items: [
        {
          src: require(`@/assets/images/renders/render_9.jpg`),
        },
        {
          src: require(`@/assets/images/renders/render_8.jpg`),
        },
        {
          src: require(`@/assets/images/renders/render_7.jpg`),
        },
        {
          src: require(`@/assets/images/renders/render_6.jpg`),
        },
      ],
      setting: {
        autoplay: true,
        dots: true,
        speed: 1000,
        autoplaySpeed: 3000,
      },
    };
  },
  computed: {
    galleries() {
      let items = [];
      for (let i = 1; i < 8; i++) {
        const src = {
          src: require(`@/assets/images/rc/gallery/gallery-${i}.jpg`),
        };
        items.push(src);
      }
      return items;
    },
  },
  methods: {
    afterChange(index) {
      this.$emit("afterChange", index);
    },
  },
};
</script>
