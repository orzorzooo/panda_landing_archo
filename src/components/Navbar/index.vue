<template>
  <div ref="navbar" class="transition fixed w-full z-60 bg-gray-100 bg-opacity-0 text-white">
    <div class="h-20">
      <div class="flex h-full px-20 justify-between items-center">
        <div class="text-2xl font-bold">{{ company_name }}</div>
        <div class="text-lg">{{ company_name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      company_name: "PANDA",
    };
  },
  methods: {
    onScrollTrigger(navbar, value) {
      if (window.pageYOffset > value) {
        navbar.classList.add("bg-opacity-100", "text-gray-500");
      } else navbar.classList.remove("bg-opacity-100", "text-gray-500");
    },
  },
  mounted() {
    const _this = this;
    const navbar = this.$refs.navbar;
    _this.onScrollTrigger(navbar, 100);
    window.addEventListener("scroll", () => {
      _this.onScrollTrigger(navbar, 100);
    });
  },
};
</script>
