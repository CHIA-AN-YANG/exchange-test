<template>
  <main class="checkout bg--lightgray main__wrapper">
    <div class="step__stuff"></div>
    <div class="main__card">
      <div class="main__card--innerspace">
        <!-- start main content -->
        <h1>Page Not Found</h1>
        <p>你要找的頁面不存在</p>
        <!-- end main content -->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped lang='scss'>
.step__stuff {
  height: 100px;
  width: 100%;
}
.main__card {
  padding-top: 20vh;
}
strong {
  cursor: pointer;
}
</style>