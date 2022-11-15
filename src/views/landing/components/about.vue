<template>
  <div class="z-60">
    <v-container class="py-30">
      <v-row>
        <v-col sm="12" md="4">
          <v-img
            src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          ></v-img>
        </v-col>
        <v-col sm="12" md="8">
          <div>about us</div>
          <div class="text-6xl font-thin">Best Designer</div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ab
            nihil neque sequi cumque iste error dignissimos, fugit obcaecati
            porro officia corrupti odit totam expedita, fuga quidem, omnis non
            sapiente.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <Blurb :delay="'100'"></Blurb>
        </v-col>
        <v-col md="6">
          <Blurb :delay="'200'"></Blurb>
        </v-col>
        <v-col md="6">
          <Blurb :delay="'300'"></Blurb>
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
