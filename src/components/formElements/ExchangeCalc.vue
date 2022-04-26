<template>
  <div>
    <div class="group__buy-in flex p-0">
      <input
        type="text"
        value="匯率"
        class="
          label__buy-in
          flex-1
          py-2
          border-b-2 border-gray-400
          focus:border-indigo-500
          text-gray-600
          placeholder-gray-400
          outline-none
        "
      />
      <div
        class="
          space__buy-in
          flex-1
          py-2
          border-b-2 border-gray-400
          focus:border-indigo-500
          text-gray-600
          placeholder-gray-400
          outline-none
        "
      ></div>
      <div
        type="text"
        id="sourceCurrency"
        name="sourceCurrencyUnit"
        class="
          currency__buy-in
          flex-1
          py-2
          border-b-2 border-gray-400
          focus:border-indigo-500
          text-gray-600
          placeholder-gray-400
          outline-none
        "
      >
        <img
          class="currency-icon__rounded mr-2"
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
          focus:border-indigo-500
          text-gray-600
          placeholder-gray-400
          outline-none
        "
      >
        {{ exchangeCurrency }}
      </div>
      <div
        class="
          rate__buy-result
          relative
          flex-1
          py-2
          border-b-2 border-gray-400
          focus:border-indigo-500
          text-gray-600
          placeholder-gray-400
          outline-none
        "
        :data-rate="rate"
      ></div>
    </div>
    <small class="text-gray-300"> 報價時間: {{ reportTime }} </small>
  </div>
</template>

<script>
export default {
  props: {
    reportTime: { type: String, default: "2021/12/01 15:33" },
    exchangeRate: { type: Number },
    inputCurrency: { type: String },
    exchangeCurrency: { type: String },
  },
  data() {
    return {
      rate: "",
    };
  },
  mounted() {
    this.rate = this.exchangeRate;
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
.currency-icon__rounded {
  object-fit: contain;
  height: 100%;
  width: auto;
}
.rate__buy-result {
  width: calc(100% - 55px);
}
.rate__buy-result::after {
  content: attr(data-rate);
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translate(0, -50%);
}
.space__buy-in {
  width: calc(100% - 55px);
}
</style>