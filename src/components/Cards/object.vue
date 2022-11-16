<template>
  <div
    data-aos="fade"
    :data-aos-delay="delay ? delay : ''"
    @click="$router.push({ name: 'object', params: { id: item.id } })"
  >
    <div>
      <v-img :src="item.image ? item.image : ''"> </v-img>
    </div>
    <div class="w-full bg-stone-600/70 p-5 text-white flex justify-between content-end">
      <div class="self-end">
        <h2 class="font-bold text-orange-300/90">{{ item.name ? item.name : "" }}</h2>
        <p class="text-white mb-0">{{ item.description ? item.description : "" }}</p>
      </div>
      <div class="self-end">
        <h3 class="text-xl">$ {{ item.price ? item.price : "" }} / 月</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "delay"],
};
</script>
