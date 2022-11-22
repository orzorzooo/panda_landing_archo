<template>
  <v-container class="py-30">
    <v-row>
      <v-col col="12" md="8">
        <v-divider></v-divider>
        <div class="text-gray-600 leading-loose my-10">
          <div v-html="description" class=""></div>
          <v-btn text class="underline mt-5 !text-sm" @click="dialog = true">...顯示更多內容 ></v-btn>
        </div>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" :width="$vuetify.breakpoint.xsOnly ? '100%' : '50%'">
      <div class="text-gray-600 text-md bg-gray-100 p-15 leading-relaxed w-1/2">
        <div class="text-lg font-bold">{{ property.name }}</div>
        <v-divider light inset></v-divider>
        <div v-html="property.description" class="my-5" v-if="dialog"></div>
        <v-divider></v-divider>
      </div>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  props: ["property"],
  computed: {
    description() {
      if (!this.property.description) return;
      return this.property.description.length > 8
        ? this.property.description.substring(0, 500) + ""
        : this.property.description;
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
