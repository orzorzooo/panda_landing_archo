<template>
  <div data-aos="fade-right" :data-aos-delay="delay">
    <div class="flex justify-between align-end py-3">
      <div class="text-xl text-white">{{ title }}</div>
      <div class="text-3xl text-yellow-400/80">
        <span class="text-xl">{{ prepend }}</span> {{ content }} <span class="text-xl">{{ append }}</span>
        <slot></slot>
      </div>
    </div>
    <v-divider dark></v-divider>
  </div>
</template>
<script>
export default {
  props: ["title", "content", "delay", "prepend", "append"],
};
</script>
