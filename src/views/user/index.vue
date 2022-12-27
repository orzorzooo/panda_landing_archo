<template>
  <div class="h-full bg-gray-700 pt-20" v-if="user">
    <v-toolbar
      dense
      dark
      color="rgba(55,65,81,1)"
      class="<md:px-2 md:px-20"
      elevation="1"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>{{ user.first_name }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <div class="h-75vh overflow-y-scroll">
      <v-container>
        <router-view data-aos="fade"></router-view>
      </v-container>
    </div>
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
