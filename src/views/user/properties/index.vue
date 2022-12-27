<template>
  <div>
    <v-container>
      <v-data-table :items="items" :headers="headers">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>My CRUD</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              fab
              dark
              small
              absolute
              top
              right
              @click="$router.push({ name: 'propertiesUpdate' })"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <!-- <v-btn
              color="primary"
              dark
              class="mb-2"
              @click="$router.push({ name: 'propertiesUpdate' })"
            >
              ADD</v-btn
            > -->
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>
<script>
import { get, post } from "@/api/request";
export default {
  data() {
    return {
      headers: [
        { text: "name", value: "name" },
        { text: "area", value: "area" },
      ],
      items: [],
    };
  },
  async created() {
    this.items = await get({ collection: "properties" });
    console.log(this.items);
  },
};
</script>
