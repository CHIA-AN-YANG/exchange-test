<template>
  <div>
    <div class="flex items-center justify-center">
      <label
        for="saveYes"
        class="
          form-check-label
          w-full
          p-4
          border
          rounded-md
          border-gray-400
          flex
        "
        :class="{ 'border-blue-500': selectSaveRegular === 'yes' }"
      >
        <input
          class="
            form-check-input
            rounded-full
            h-6
            w-6
            border border-gray-300
            bg-white
            checked:bg-blue-600 checked:border-blue-600
            focus:outline-none
            transition
            duration-200
            mt-1
            cursor-pointer
          "
          type="radio"
          name="saveRegular"
          value="yes"
          id="saveYes"
          v-model="selectSaveRegular"
          @mouseup="update()"
        />
        <span class="inline-block h-6 pl-2 pr-5 mt-1 text-gray-800"> 是 </span>
      </label>
      <label
        for="saveNo"
        class="
          w-full
          form-check-label
          p-4
          m-2
          border
          rounded-md
          border-gray-400
          flex
        "
        :class="{ 'border-blue-500': selectSaveRegular === 'no' }"
      >
        <input
          class="
            form-check-input
            rounded-full
            h-6
            w-6
            border border-gray-300
            bg-white
            checked:bg-blue-600 checked:border-blue-600
            focus:outline-none
            transition
            duration-200
            mt-1
            cursor-pointer
          "
          type="radio"
          value="no"
          name="saveRegular"
          id="saveNo"
          v-model="selectSaveRegular"
          @mouseup="update()"
        />
        <span class="inline-block h-6 pl-2 pr-5 mt-1 text-gray-800"> 否 </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectSaveRegular: null,
    };
  },
  methods: {
    update() {
      this.$emit("select", this.selectSaveRegular);
    },
  },
};
</script>
<style scoped lang='scss'>
</style>