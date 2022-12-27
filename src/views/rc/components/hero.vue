<template>
  <div>
    <v-sheet class="rc-bg bg-cover relative right-0" height="90vh">
      <div
        class="relative text-white write-vertical-right py-20 pt-30 mx-auto text-shadow-lg"
      >
        <h1 class="text-4xl md:text-6xl font-regular md:font-thin ml-5">
          構築
        </h1>
        <h1 class="text-4xl md:text-6xl font-bold md:font-thin ml-5">鋼好</h1>
        <h2 class="text-4xl md:text-6xl font-bold md:font-thin ml-5">
          {{ "輕。生活" }}
        </h2>
        <p class="text-4xl md:text-2xl font-bold ml-5">可移動裝配式度假美宅</p>
      </div>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animate01: {
        classes: "fadeIn",
        delay: 500,
      },
      animate02: {
        classes: "fadeIn",
        delay: 1000,
      },
      animate03: {
        classes: "fadeIn",
        delay: 1300,
      },
      animate04: {
        classes: "fadeIn",
        delay: 1800,
      },
    };
  },
};
</script>
<style scope>
.rc-bg {
  background-image: url("@/assets/images/rc/hero-bg.jpg");
  border-bottom-right-radius: 30rem;
}
</style>
