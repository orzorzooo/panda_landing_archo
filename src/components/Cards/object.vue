<template>
  <div
    class="cursor-pointer"
    data-aos="fade"
    :data-aos-delay="delay ? delay : ''"
    @click="$router.push({ name: 'object', params: { id: item.id } })"
  >
    <div>
      <v-img v-if="img" :src="img" class="h-300px md:h-300px"> </v-img>
      <ImgIcon v-else></ImgIcon>
    </div>
    <div
      class="w-full bg-stone-600/70 p-5 text-white flex justify-between content-end h-20"
    >
      <div class="self-end">
        <h2 class="font-bold text-orange-300/90">
          {{ item.name ? item.name : "" }}
        </h2>
        <p class="!text-white mb-0" v-html="substring"></p>
      </div>
      <div class="self-end">
        <h3 class="text-xl">
          $ {{ item.rent_price ? item.rent_price : "" }} / 月
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
import { assetURL } from "@/api/request";
import ImgIcon from "@/components/imgIcon.vue";
export default {
  props: ["item", "delay"],
  components: { ImgIcon },
  methods: { assetURL },
  computed: {
    img() {
      if (!this.item.files || this.item.files.length <= 0) return false;
      return assetURL(`${this.item.files[0].directus_files_id}`, {
        quality: 50,
        width: 800,
      });
    },
    substring() {
      if (!this.item.description) return;
      return this.item.description.length > 8
        ? this.item.description.substring(0, 8) + "..."
        : this.item.description;
    },
  },
  filters: {
    substring(value) {
      return value.length > 8 ? value.substring(0, 8) + "..." : value;
    },
  },
  // assetURL(item.image, { quality: 30, width: 500 })
};
</script>
