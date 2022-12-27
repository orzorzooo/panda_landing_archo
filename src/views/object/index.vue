<template>
  <div v-if="property">
    <Hero :property="property"></Hero>
    <Gallery :files="property.files"></Gallery>
    <v-container>
      <v-row class="md:py-30">
        <v-col>
          <Introduce :property="property"></Introduce>
        </v-col>
        <v-col cols="12" md="4">
          <GoogleMap :property="property"></GoogleMap>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <Specs :property="property"></Specs>
    </v-container>
    <div></div>

    <!-- <div>obj {{ $route.params.id }}</div> -->
  </div>
</template>
<script>
import { get, assetURL } from "@/api/request";
import HeaderList from "./components/headerList.vue";
import Hero from "./components/hero.vue";
import Introduce from "./components/introduce.vue";
import Gallery from "./components/gallery.vue";
import Specs from "./components/specs.vue";
import GoogleMap from "./components/googleMap.vue";
export default {
  components: { HeaderList, Hero, Introduce, Gallery, Specs, GoogleMap },
  data() {
    return {
      property: null,
    };
  },
  computed: {
    featureImg() {
      return assetURL(this.property.files[0].directus_files_id);
    },
  },
  async created() {
    this.property = await get({
      collection: `properties/${this.$route.params.id}`,
      params: { fields: "*,files.directus_files_id" },
    });
  },
};
</script>
