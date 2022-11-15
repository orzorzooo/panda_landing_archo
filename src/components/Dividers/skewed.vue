<template>
  <section class="relative h-60 test">
    <div class="skewed"></div>
  </section>
</template>
<style scoped>
.skewed {
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(
      to right bottom,
      rgba(251, 146, 60, 100) 49.9999%,
      #fff 50%
    ),
    linear-gradient(-50deg, #ffffff 16px, #000 0);
  /* transform-origin: top right; */
}
</style>
