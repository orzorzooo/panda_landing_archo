<template>
  <div class="text-gray-200 pb-10" v-if="property">
    <div class="text-3xl font-bold my-3">預約名稱 {{ property.name }}</div>
    <div>
      <v-img :src="featureImg" v-if="featureImg"></v-img>
      <ImgIcon v-else></ImgIcon>
    </div>
    <v-divider dark class="my-3"></v-divider>
    <div class="text-xl">填寫基本資料</div>
    <v-form dark>
      <v-text-field
        v-model="reserve.name"
        label="預約姓名"
        prepend-icon="mdi-user"
        dark
      ></v-text-field>
      <v-text-field
        v-model="reserve.email"
        label="email信箱"
        prepend-icon="mdi-mail"
        dark
      ></v-text-field>
      <v-text-field
        dark
        v-model="reserve.datetime"
        label="選擇預約日期"
        prepend-icon="mdi-calendar"
        readonly
        @click="dateDialog = true"
      ></v-text-field>
      <v-dialog v-model="dateDialog" dark>
        <v-date-picker
          v-model="reserve.datetime"
          scrollable
          width="100%"
        ></v-date-picker>
      </v-dialog>
      <v-btn block outlined dark x-large @click="submit">送出預約</v-btn>
    </v-form>
  </div>
</template>
<script>
import { get, post, assetURL } from "@/api/request";
import { mapGetters } from "vuex";
import ImgIcon from "@/components/imgIcon.vue";
export default {
  components: { ImgIcon },
  data() {
    return {
      assetURL,
      property: {
        files: [],
      },
      reserve: {
        datetime: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        name: "",
        email: "",
      },
      dateDialog: false,
    };
  },
  computed: {
    ...mapGetters("user", ["user"]),
    featureImg() {
      // if (this.property.files.length == 0) return "";
      if (this.property.files.length == 0) return;
      return assetURL(this.property.files[0].directus_files_id, {
        quality: 50,
        width: 1024,
      });
    },
  },
  methods: {
    async submit() {
      this.reserve.property = this.property;
      const result = await post({ data: this.reserve, collection: "reserve" });
      console.log(result);
    },
  },
  async created() {
    this.property = await get({
      collection: `properties/${this.$route.params.id}`,
      params: { fields: "*,files.directus_files_id" },
    });
    this.reserve.name = this.user.first_name;
    this.reserve.email = this.user.email;
  },
};
</script>
