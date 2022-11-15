<template>
  <div>
    <Hero></Hero>
    <SkewedDivider></SkewedDivider>
    <About></About>
    <Feature></Feature>
  </div>
</template>

<script>
import Hero from "./components/hero.vue";
import Feature from "./components/feature.vue";
import About from "./components/about.vue";
import SkewedDivider from "@/components/Dividers/skewed.vue";
export default {
  components: { Hero, Feature, About, SkewedDivider },
};
</script>
