<template>
  <!-- Modal -->
  <div
    class="
      modal-frame--agreement
      modal
      fade
      outline-none
      w-full
      overflow-x-hidden overflow-y-auto
    "
    :class="isOpen ? '' : 'hidden'"
    tabindex="-1"
  >
    <div class="modal-dialog relative w-auto pointer-events-none">
      <div
        class="
          modal-content
          border-none
          relative
          flex flex-col
          w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            items-center
            justify-center
            p-5
            pb-0
            rounded-t-lg
          "
        >
          <h5 class="text-xl font-bold text-gray-800">
            {{ title }}
          </h5>
        </div>
        <div class="modal-body relative p-5">
          {{ text }}
        </div>
        <div
          v-if="type == 'consent'"
          class="
            modal-footer
            flex
            items-center
            justify-center
            p-5
            pt-0
            rounded-b-lg
          "
        >
          <button
            type="button"
            @click="close()"
            class="
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              w-full
              text-x
              leading-tight
              uppercase
              rounded
              hover:bg-blue-700
              focus:bg-blue-700 focus:outline-none focus:ring-0
              active:bg-blue-800
              transition
              duration-150
              ease-in-out
            "
          >
            我知道了
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: { type: Boolean, default: false },
    title: { type: String, default: "" },
    text: { type: String, default: "" },
    type: { type: String, default: "consent" },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.modal-frame--agreement {
  margin: auto 10vw;
  position: absolute;
  max-width: calc(100% - 20vw);
  top: 30%;
  transform: translateY(-50%);
  z-index: 100;
}
</style>
