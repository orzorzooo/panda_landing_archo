<template>
  <div data-aos="fade-top" :data-aos-delay="delay">
    <div class="flex justify-between align-end py-3">
      <div class="text-xl text-white">{{ title }}</div>
      <div class="text-3xl text-yellow-400/80">
        {{ content }}
      </div>
    </div>
    <v-divider dark></v-divider>
  </div>
</template>
<script>
export default {
  props: ["title", "content", "delay"],
};
</script>
