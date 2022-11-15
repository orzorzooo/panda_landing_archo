<template>
  <div>
    <Hero></Hero>
    <About></About>
    <Feature></Feature>
    <Objects></Objects>
  </div>
</template>

<script>
import Hero from "./components/hero.vue";
import Feature from "./components/feature.vue";
import About from "./components/about.vue";
import SkewedDivider from "@/components/Dividers/skewed.vue";
import Objects from "./components/objects.vue";
export default {
  components: { Hero, Feature, About, SkewedDivider, Objects },
};
</script>
