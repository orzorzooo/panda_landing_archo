<template>
  <div class="bg-stone-700 py-50">
    <v-container>
      <div class="text-white font-thin text-3xl mb-15">房源一覽</div>
      <v-row>
        <v-col md="4" v-for="(item, i) in objects" :key="i">
          <CardObject :item="item" :delay="i * 200"></CardObject>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CardObject from "@/components/Cards/object.vue";
export default {
  components: { CardObject },
  data() {
    return {
      objects: [
        {
          name: "test",
          description: "lorem word 123",
          price: "3000",
          image:
            "https://images.pexels.com/photos/271647/pexels-photo-271647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "test",
          price: "3000",
          description: "lorem word",
          image:
            "https://images.pexels.com/photos/271647/pexels-photo-271647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "test",
          price: "3000",
          description: "lorem word",
          image:
            "https://images.pexels.com/photos/271647/pexels-photo-271647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    };
  },
};
</script>
