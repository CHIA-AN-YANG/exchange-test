<template>
  <!-- start prev/next btns -->
  <div class="btn--holder">
    <button
      type="submit"
      :disable="!valid"
      class="
        py-3
        bg-blue-500
        hover:bg-blue-600
        rounded
        text-white text-center
        font-bold
        w-full
      "
      :class="{ inactive: !valid }"
      @click="debouncedNext"
    >
      <h1 v-text="proceedText"></h1>
    </button>
  </div>
  <!-- end prev/next btns -->
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
@import "../../stylesheets/base";
@import "../../stylesheets/global";
.btn--holder {
  @include size(100px, 100%);
  margin-top: auto;
  flex: 1 1 100px;
  display: flex;
  .btn--next,
  .btn--prev {
    align-self: center;
    flex: 0 0 120px;
    transition: $transition;
    > * {
      align-self: center;
    }
    > span {
      display: block;
      width: 65px;
    }
    > svg {
      @include size(1.6em);
    }
  }
  .btn--prev {
    @include blue-outline-style;
    margin-right: auto;
    > svg {
      margin-right: 0.2em;
      transform: rotate(180deg);
    }
  }
  .btn--next {
    @include blue-solid-style;
    margin-left: auto;
    > svg {
      margin-left: 0.2em;
    }
    &.inactive {
      opacity: 0.5;
      filter: grayscale(70%);
    }
  }
}
@media (max-width: $breakpoint-phone) {
  .btn--holder {
    @include size(80px, 100%);
    padding: 0 0.6em 20px;
    .btn--next,
    .btn--prev {
      > svg {
        @include size(1.6em);
      }
    }
  }
}
@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) {
  .btn--holder {
    @include size(100px, 100%);
    padding: 0 0.6em 20px;
    .btn--next,
    .btn--prev {
      > svg {
        @include size(1.6em);
      }
    }
  }
}
@media (max-width: 375px) and (orientation: portrait) {
  .btn--holder {
    @include size(200px, 100%);
    padding: 0.8em 0.6em 20px;
    flex-wrap: wrap;
    .btn--next,
    .btn--prev {
      margin-top: 0.8em;
      flex: 0 0 100%;
      > svg {
        @include size(1.6em);
      }
    }
    .btn--prev {
      @include blue-outline-style;
      text-align: left;
      justify-content: flex-start;
      > * {
        flex: 0 0 1;
      }
      > svg {
        margin-right: 0.2em;
        transform: rotate(180deg);
      }
    }
    .btn--next {
      @include blue-solid-style;
      text-align: right;
      justify-content: flex-end;
      > * {
        flex: 0 0 1;
      }
      > svg {
        margin-left: 0.2em;
      }
    }
  }
}
</style>
