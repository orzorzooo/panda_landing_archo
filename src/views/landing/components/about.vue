<template>
  <div class="z-60">
    <v-container class="py-30">
      <v-row class="text-gray-500">
        <v-col sm="12" md="6" data-aos="fade-right">
          <div class="text-lg <md:text-center md:(text-left text-sm)">關於悟見</div>
          <div class="text-4xl <md:text-center font-bold md:(text-left text-6xl font-thin) my-5">全新的生活型態</div>
          <div class="leading-loose">
            Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis
            turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi.
          </div>
        </v-col>
        <v-col sm="12" md="6" data-aos="fade-left">
          <v-img
            src="https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            height="200"
            width="300"
          ></v-img>
          <div class="bg h-32 md:w-100 md:-mt-10 md:ml-5"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Blurb from "@/components/blurb.vue";
export default {
  components: { Blurb },
};
</script>
<style scoped>
.bg {
  background-image: linear-gradient(
    45deg,
    #ffffff 25%,
    #f6f0cf 25%,
    #f6f0cf 50%,
    #ffffff 50%,
    #ffffff 75%,
    #f6f0cf 75%,
    #f6f0cf 100%
  );
  background-repeat: repeat;
  background-size: 10px 10px;
}
</style>
