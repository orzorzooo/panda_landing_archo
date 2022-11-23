<template>
  <div>
    <HeaderListItem
      v-for="(item, i) in listItems"
      :key="i"
      :title="item.title"
      :content="item.value"
      :prepend="item.prepend"
      :append="item.append"
      :delay="delay * i"
    ></HeaderListItem>
    <HeaderListItem :title="'空間'" :delay="delay * 4">
      <div class="text-right">
        {{ property.rooms }}<span class="text-xl"> 房 </span>

        {{ property.halls }}<span class="text-xl"> 廳 </span>
        <br />
        {{ property.kitchens }}<span class="text-xl"> 廚 </span>

        {{ property.bathrooms }}<span class="text-xl"> 衛浴 </span>

        {{ property.balconies }}<span class="text-xl"> 陽臺 </span>
      </div>
    </HeaderListItem>

    <HeaderListItem :title="'停車'" :delay="delay * 5">
      {{ property.parking_space | parking_space_filter }}
    </HeaderListItem>
  </div>
</template>
<script>
import HeaderListItem from "./headerListItem.vue";
export default {
  components: { HeaderListItem },
  props: ["property"],
  computed: {
    listItems() {
      let list = [];
      const map = {
        space_type: { title: "空間類型" },
        rent_price: { title: "租金", prepend: "$", append: "元" },
        square_meter: { title: "坪數", append: "坪" },
      };
      for (let item in map) {
        const listItem = {
          title: map[item].title,
          prepend: map[item].prepend ? map[item].prepend : "",
          append: map[item].append ? map[item].append : "",
          value: this.property[item],
        };
        list.push(listItem);
      }
      return list;
    },
  },
  filters: {
    parking_space_filter(value) {
      const map = {
        car: "汽車",
        motorbike: "機車",
      };
      return value ? map[value] : "無";
    },
  },
  data() {
    return {
      delay: 100,
    };
  },
};
</script>
