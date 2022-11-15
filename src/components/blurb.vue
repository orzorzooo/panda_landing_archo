<template>
  <div
    class="text-center my-5 md:my-20"
    :data-aos="effect ? effect : 'flip-right'"
    :data-aos-delay="delay ? delay : ''"
  >
    <v-img
      max-width="100%"
      contain
      src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ></v-img>
    <div class="text-3xl font-bold my-2">{{ title ? title : "" }}</div>
    <p class="font-light text-left">
      {{ text ? text : "" }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["title", "text", "delay", "effect"],
};
</script>
