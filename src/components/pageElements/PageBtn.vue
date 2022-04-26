<template>
  <!-- start btns -->
  <button
    :disable="!valid"
    :class="{ inactive: !valid }"
    @click="debouncedNext"
    class="
      group
      relative
      w-full
      flex
      justify-center
      py-2
      px-4
      border border-transparent
      text-sm
      font-medium
      rounded-md
      text-white
      bg-blue-600
      hover:bg-indigo-700
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    "
  >
    <span class="text-white" v-text="proceedText"></span>
  </button>
  <!-- end btns -->
</template>

<script>
const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};
export default {
  props: {
    proceedText: { type: String, default: "送出" },
    valid: { type: Boolean, default: false },
  },
  created() {
    this.debouncedNext = debounce(this.getNextRoute, 500);
  },
  methods: {
    getNextRoute() {
      if (this.valid) {
        this.$emit("goNext");
      }
    },
  },
};
</script>

<style scoped lang="scss">
button.inactive {
  opacity: 0.8;
}
</style>
