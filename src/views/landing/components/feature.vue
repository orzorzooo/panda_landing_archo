<template>
  <div>
    <div class="h-150">
      <div class="h-full">
        <transition name="slide-fade">
          <div :style="bg()" class="h-full img">
            <v-row class="h-full p-0">
              <v-col
                :cols="6"
                :md="3"
                v-for="(item, i) in features"
                :key="i"
                class="border-r-1 border-b-1 on-hover p-0 text-black text-2xl font-bold"
                @mouseenter="hover = i"
              >
                <v-expand-transition>
                  <!-- <v-icon v-if="hover == i"> mdi-plus-circle </v-icon> -->
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
          <!-- <v-img :src="features[hover].image" height="100%">
            <v-row class="h-full p-0">
              <v-col
                :cols="6"
                :md="3"
                v-for="(item, i) in features"
                :key="i"
                class="p-10 border-r-1 border-t-1"
                @mouseenter="hover = i"
              >
                <div>{{ item.title }}</div>
              </v-col>
            </v-row>
          </v-img> -->
        </transition>
      </div>
    </div>
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
          image:
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "買賣",
          image:
            "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "出租",
          image:
            "https://images.pexels.com/photos/1484981/pexels-photo-1484981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "輕鋼構",
          image:
            "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    };
  },
};
</script>
<style scoped>
.img {
  background-size: cover;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
/* prefix with transition name */
.slide-fade-enter-active {
  opacity: 1;
  z-index: 10;
}

.slide-fade-leave-active {
  opacity: 1;
}

.on-hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.on-hover:hover {
  background-color: rgba(4, 4, 4, 0.5);
}
</style>
