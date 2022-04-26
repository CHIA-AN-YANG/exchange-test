<template>
  <div>
    <div class="flex items-center justify-center">
      <div
        class="
          w-full
          p-4
          border
          rounded-md
          border-gray-400
          focus:border-indigo-500
          flex
        "
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
          id="save-regular-yes"
          v-model="inputData"
          @keyup="$emit('update:inputData', inputData)"
          checked
        />
        <label
          class="form-check-label inline-block h-6 pl-2 pr-5 mt-1 text-gray-800"
          for="save-regular-yes"
        >
          是
        </label>
      </div>
      <div
        class="
          w-full
          p-4
          m-2
          border
          rounded-md
          border-gray-400
          flex
          focus:border-indigo-500
        "
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
          id="save-regular-no"
          v-model="inputData"
          @keyup="$emit('update:inputData', inputData)"
        />
        <label
          class="form-check-label inline-block h-6 pl-2 pr-5 mt-1 text-gray-800"
          for="save-regular-no"
        >
          否
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: true,
    };
  },
  methods: {},
};
</script>
<style scoped lang='scss'>
</style>