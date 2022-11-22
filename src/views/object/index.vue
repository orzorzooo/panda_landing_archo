<template>
  <div v-if="property">
    <v-container fluid class="p-0">
      <v-img
        :src="featureImg"
        height="100vh"
        gradient="to bottom right, rgba(0,0,0,.9), rgba(0,0,0,.3)"
      >
        <v-container class="h-full">
          <v-row align="center" class="h-full p-10">
            <v-col cols="12" sm="12" md="6">
              <div class="text text-yellow-400/80 mb-3" data-aos="fade-right">
                {{ property.address }}
              </div>
              <div
                class="text-5xl text-white"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {{ property.name }}
              </div>

              <HeaderList
                :title="'租金'"
                :content="`$${property.rent_price}/月`"
              ></HeaderList>
              <HeaderList
                :delay="300"
                :title="'地坪'"
                :content="`${property.square_meter}坪`"
              ></HeaderList>
            </v-col>
            <v-col sm="12"> </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-container>
    <!-- <div>obj {{ $route.params.id }}</div> -->
  </div>
</template>
<script>
import { get, assetURL } from "@/api/request";
import HeaderList from "./components/headerList.vue";
export default {
  components: { HeaderList },
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
      url: `properties/${this.$route.params.id}`,
      params: { fields: "*,files.directus_files_id" },
    });
  },
};
</script>
