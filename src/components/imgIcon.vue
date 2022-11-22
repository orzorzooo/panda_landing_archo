<template>
  <div class="bg-gray-400 h-50 p-5 flex items-center">
    <v-img :src="img" height="100%" contain>
      <slot></slot>
    </v-img>
  </div>
</template>
<script>
import img from "@/assets/images/img-icon-white.svg";
export default {
  props: ["inputClass", "gradient"],
  data() {
    return {
      img,
    };
  },
};
</script>
