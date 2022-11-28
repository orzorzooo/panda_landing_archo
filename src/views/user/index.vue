<template>
  <div class="h-full bg-gray-700">
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["user"]),
  },
};
</script>
