<template>
  <div class="text-gray-200">
    <div class="text-3xl font-bold">預約名稱 {{ property.name }}</div>
    <v-divider dark class="my-3"></v-divider>
    <div class="text-xl">填寫基本資料</div>
    <v-form dark>
      <v-text-field
        dark
        v-model="reserve.date"
        label="選擇預約日期"
        prepend-icon="mdi-calendar"
        readonly
        @click="dateDialog = true"
      ></v-text-field>
      <v-dialog v-model="dateDialog" dark>
        <v-date-picker
          v-model="reserve.date"
          scrollable
          width="100%"
        ></v-date-picker>
      </v-dialog>
    </v-form>
    <div>預約日期</div>
  </div>
</template>
<script>
import { get, post } from "@/api/request";
export default {
  data() {
    return {
      property: {},
      reserve: {
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      },
      dateDialog: false,
    };
  },
  computed: {
    featureImg() {
      return assetURL(this.property.files[0].directus_files_id, {
        quality: 50,
        width: 1024,
      });
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
