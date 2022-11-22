<template>
  <div class="bg-gray-300">
    <v-container fluid class="p-0">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img :src="featureImg" height="100%"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-row class="" no-gutters>
            <v-col cols="12" md="6" v-for="(item, i) in galleryImg" :key="i">
              <v-img :src="assetURL(item.directus_files_id)" height="100%"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { get, assetURL } from "@/api/request";
export default {
  props: ["files"],
  methods: { assetURL },
  computed: {
    img(id) {
      return assetURL(id);
    },
    featureImg() {
      if (this.files.length == 0) return;
      return assetURL(this.files[0].directus_files_id);
    },
    galleryImg() {
      return this.files.filter((item, i) => {
        return i > 0;
      });
    },
  },
};
</script>
