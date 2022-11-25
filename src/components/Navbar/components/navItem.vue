<template>
  <div
    class="text-lg cursor-pointer px-5"
    @click="$route.name != routeName ? $router.push({ name: routeName }) : ''"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["title", "routeName"],
};
</script>
