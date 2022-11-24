<template>
  <div>
    <v-container fluid class="p-0">
      <div class="h-150">
        <div class="absolute h-150 w-full overflow-hidden bg-white">
          <transition name="fade">
            <img
              :src="features[hover].image"
              :key="hover"
              alt=""
              class="max-h-full w-full object-cover h-150 transition-opacity"
            />
          </transition>
        </div>

        <v-row no-gutters class="relative h-full">
          <v-col
            v-for="(item, i) in features"
            :key="i"
            @mouseenter="hover = i"
            @click="hover = i"
            class="border-r-1 border-b-1 on-hover p-0 text-black text-2xl font-bold on-hover"
          >
            <v-expand-transition>
              <div v-if="hover == i" class="bg-white <md:h-full md:h-30">
                <div class="p-10 pt-3">
                  <div class="text-sm mb-3">service</div>
                  <div class="">{{ item.title }}</div>
                </div>
              </div>
            </v-expand-transition>
            <div class="p-10 pt-3 text-white" v-if="hover != i">
              <div class="text-sm mb-3">service</div>
              <div class="">{{ item.title }}</div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  methods: {
    bg() {
      return { "background-image": `url(${this.features[this.hover].image})` };
    },
  },
  data() {
    return {
      hover: 0,
      features: [
        {
          title: "租賃",
          image: require("@/assets/images/landing-feature-01.jpg"),
        },
        {
          title: "買賣",
          image: require("@/assets/images/landing-feature-02.jpg"),
        },
        {
          title: "出租",
          image: require("@/assets/images/landing-feature-03.jpg"),
        },
        {
          title: "輕鋼構",
          image: require("@/assets/images/landing-feature-04.jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
  /* transition: 0.5s -webkit-filter linear; */
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
  filter: blur(20px);
}

.fade-enter,
.fade-leave-to {
  opacity: 1;
  filter: blur(20px);
}
.on-hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.on-hover:hover {
  background-color: rgba(4, 4, 4, 0.5);
}
</style>
