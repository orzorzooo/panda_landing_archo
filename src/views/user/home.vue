<template>
  <div>
    <!-- <div class="text-8xl font-bold text-white h-500">home</div> -->
    <div>
      <v-container> </v-container>
    </div>
  </div>
</template>
<script>
import { get, post } from "@/api/request";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["reserveObjectID"]),
  },
  created() {
    if (this.reserveObjectID) {
      return this.$router.push({
        name: "object",
        params: { id: this.reserveObjectID },
      });
    }
  },
};
</script>
