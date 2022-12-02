<template>
  <div>
    <v-divider></v-divider>
    <div>
      <v-btn
        width="100%"
        x-large
        color="primary"
        @click="
          setReserveObjectID(property.id);
          $router.push({ name: 'reserve' });
        "
      >
        立即預約
      </v-btn>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["property"],
  methods: {
    ...mapMutations("user", ["setReserveObjectID"]),
  },
};
</script>
