<template>
  <div class="bg-gray-300/50 h-300px p-5 flex items-center">
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
