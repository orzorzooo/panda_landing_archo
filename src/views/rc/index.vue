<template>
  <div class="bg-zinc-200">
    <Hero></Hero>
    <Feature></Feature>
    <Feature02></Feature02>
    <About></About>
    <Products></Products>
    <FeatureList></FeatureList>
    <Shipment></Shipment>
  </div>
</template>
<script>
import Hero from "./components/hero.vue";
import Feature from "./components/feature.vue";
import Feature02 from "./components/feature02.vue";
import About from "./components/about.vue";
import Products from "./components/products.vue";
// import gallery from "./components/gallary.vue";
import FeatureList from "./components/featureList.vue";
import Shipment from "./components/shipment.vue";

export default {
  components: {
    Hero,
    Feature,
    Feature02,
    About,
    Products,
    FeatureList,
    Shipment,
  },
};
</script>
