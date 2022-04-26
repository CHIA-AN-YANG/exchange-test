<template>
  <div class="max-w-sm mx-auto my-2 bg-white px-5 py-2">
    <p class="form-group-label mt-5">我要買入</p>
    <div class="group__buy-in flex p-0">
      <input
        type="text"
        value="匯率"
        class="
          label__buy-in
          flex-1
          py-2
          border-b-2 border-gray-400
          focus:border-gray-600
          text-gray-600
          placeholder-gray-400
          outline-none
        "
      />
      <input
        type="number"
        id="sourceCurrency"
        name="sourceCurrencyAmount"
        class="
          input__buy-in
          flex-1
          py-2
          border-b-2 border-gray-400
          focus:border-gray-600
          text-gray-600
          placeholder-gray-400
          outline-none
        "
      />
      <div
        type="text"
        id="sourceCurrency"
        name="sourceCurrencyUnit"
        class="
          currency__buy-in
          flex-1
          py-2
          border-b-2 border-gray-400
          focus:border-gray-600
          text-gray-600
          placeholder-gray-400
          outline-none
        "
      >
        <img
          class="input-icon__rounded mr-2"
          src="../../assets/us-flag-icon_round.png"
          alt="flag-icon"
        />
        {{ inputCurrency }}
      </div>
    </div>
    <div class="group__buy-result flex no-wrap">
      <div
        class="
          label__buy-result
          flex-1
          py-2
          border-b-2 border-gray-400
          focus:border-gray-600
          text-gray-600
          placeholder-gray-400
          outline-none
        "
      >
        {{ exchangeCurrency }}
      </div>
      <input
        type="number"
        id="targetCurrency"
        data-currency="台幣"
        :value="inputAmount * exchangeRate"
        class="
          input__buy-result
          flex-1
          py-2
          border-b-2 border-gray-400
          focus:border-gray-600
          text-gray-600
          placeholder-gray-400
          outline-none
        "
      />
    </div>
    <small class="text-gray-300"> 報價時間: {{ reportTime }} </small>
  </div>
</template>

<script>
export default {
  props: {
    reportTime: { type: String, default: "2021/12/01 15:33" },
    exchangeRate: { type: Number, default: 33 },
    inputCurrency: { type: String, default: "美金" },
    exchangeCurrency: { type: String, default: "台幣" },
  },
  data() {
    return {
      inputAmount: 0,
    };
  },
  methods: {
    emitAmount() {
      this.$emit("setAmount", this.inputAmount);
    },
  },
};
</script>
<style scoped lang='scss'>
.group__buy-in,
.group__buy-result {
  height: 40px;
}
.label__buy-in,
.label__buy-result {
  width: 50px;
  max-width: 50px;
  padding-right: 5px;
}
.currency__buy-in {
  position: relative;
  min-width: 70px;
  max-width: 70px;
  display: inline-flex;
}
.input-icon__rounded {
  object-fit: contain;
  height: 100%;
  width: auto;
}
.input__buy-result {
  width: calc(100% - 125px);
  user-select: none;
  pointer-events: none;
}
.input__buy-in {
  width: calc(100% - 55px);
}
</style>