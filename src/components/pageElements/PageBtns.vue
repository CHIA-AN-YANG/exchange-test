<template>
  <!-- start btns -->
  <div class="btn--holder">
    <button
      type="submit"
      :disable="!valid"
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
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
      :class="{ inactive: !valid }"
      @click="debouncedNext"
    >
      <span class="text-white" v-text="proceedText"></span>
    </button>
  </div>
  <!-- end btns -->
</template>

<script>
//Can be replaced with lodash if more lodash functions are on demand.
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
        this.$emit("open");
      }
    },
  },
};
</script>

<style scoped lang="scss">
</style>
