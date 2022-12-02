<template>
  <v-card :height="$vuetify.breakpoint.xsOnly ? '300' : '100%'">
    <v-card-text class="h-full">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        :src="`https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=${property.address}&z=16&output=embed&t=`"
      ></iframe>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["property"],
};
</script>
