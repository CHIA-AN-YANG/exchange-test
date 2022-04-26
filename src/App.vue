<template>
  <div class="wrapper__app">
    <Navbar />
    <!-- start main page content -->
    <router-view />
    <!-- start main page content -->
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style lang="scss">
@import "src/stylesheets/base";
@import "src/stylesheets/global";
</style>
