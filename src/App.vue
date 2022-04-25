<template>
  <div class="wrapper__app">
    <Navbar @renewSteps="renewStep" />
    <!-- start main page content -->
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <router-view />
    <!-- start main page content -->
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
  computed: {
    getSteps() {
      return this.$store.steps;
    },
  },
  methods: {
    renewStep(val) {
      this.steps = val;
    },
  },
};
</script>

<style lang="scss">
@import "src/stylesheets/base";
@import "src/stylesheets/global";
</style>
