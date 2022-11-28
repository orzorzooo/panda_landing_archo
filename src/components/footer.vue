<template>
  <div class="h-20 bg-gray-500 text-white">
    <v-container class="text-center">
      <div>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon dark>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </div>
      <div class="text-sm">Copyright by PANDA.INC</div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: ["mdi-home", "mdi-email", "mdi-phone"],
    };
  },
};
</script>
