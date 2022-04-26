<template>
  <div>
    <div
      class="input-wrapper__amount relative mt-2"
      :data-currency="inputData['input-currency']"
    >
      <input
        type="number"
        id="buy-in-amount"
        name="buy-in-amount"
        v-model="buyinValue"
        @blur="calcAndEmit(buyinValue, true)"
        class="
          block
          w-full
          p-2
          border
          rounded-md
          border-gray-400
          focus:border-indigo-500
        "
      />
    </div>
    <div
      class="input-wrapper__amount relative"
      :data-currency="inputData['exchange-currency']"
    >
      <input
        type="number"
        id="exchange-amount"
        v-model="exchangeValue"
        @blur="calcAndEmit(exchangeValue, false)"
        class="block w-full mt-2 p-2 border rounded-md border-gray-500"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exchangeRate: { type: Number, default: 33 },
    inputCurrency: { type: String, default: "美金" },
    exchangeCurrency: { type: String, default: "台幣" },
  },
  data() {
    return {
      buyinValue: "",
      exchangeValue: "",
      inputData: {
        "input-currency": this.inputCurrency,
        "input-amount": 0,
        "exchange-currency": this.exchangeCurrency,
        "exchange-amount": 0,
        "exchange-rate": this.exchangeRate,
        "form-is-valid": false,
      },
    };
  },
  methods: {
    calcAndEmit(val, isBuyin) {
      if (this.buyinValue || this.exchangeValue) {
        if (isBuyin) {
          this.exchangeValue = val * this.exchangeRate;
        } else {
          this.buyinValue = val * this.exchangeRate;
        }
        if (
          this.checkValid(this.buyinValue) &&
          this.checkValid(this.exchangeValue)
        ) {
          this.inputData["input-amount"] = this.buyinValue;
          this.inputData["exchange-amount"] = this.exchangeValue;
          this.inputData["form-is-valid"] = true;
          this.$emit("amountInput", this.inputData);
          console.log(this.inputData);
        } else {
          /* inform user about the error */
        }
      }
    },
    checkValid(val) {
      if (typeof val === "number" && val > 0) {
        return true;
      }
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
#exchange-amount {
  user-select: none;
  pointer-events: none;
}
</style>