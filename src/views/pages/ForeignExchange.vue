<template>
  <main class="checkout bg--lightgray main__wrapper">
    <!-- start main content -->
    <div class="container mx-auto p-2">
      <form action="#">
        <ExchangeCalc
          :inputCurrency="mockApi.inputCurrency"
          :exchangeCurrency="mockApi.exchangeCurrency"
          :exChangeRate="mockApi.exChangeRate"
          :reportTime="mockApi.reportTime"
        />
        <div class="max-w-sm mx-auto my-2 bg-white px-5 py-2">
          <p class="form-group-label mt-5">我要買入</p>
          <div
            class="input-wrapper__amount relative"
            :data-currency="mockApi.inputCurrency"
          >
            <input
              type="number"
              id="buy-in-amount"
              name="buy-in-amount"
              class="block w-full p-2 border rounded-lg border-gray-400"
            />
          </div>
          <div
            class="input-wrapper__amount relative"
            :data-currency="mockApi.exchangeCurrency"
          >
            <input
              type="number"
              id="exchange-amount"
              class="block w-full mt-2 p-2 border rounded-lg border-gray-500"
            />
          </div>

          <p class="form-group-label mt-5">是否存入常用</p>
          <div class="flex items-center justify-center">
            <div
              class="
                form-check
                block
                w-full
                p-4
                border
                rounded-lg
                border-gray-400
              "
            >
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-blue-600 checked:border-blue-600
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  cursor-pointer
                "
                type="radio"
                name="saveRegular"
                id="save-regular-yes"
                checked
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="save-regular-yes"
              >
                是
              </label>
            </div>
            <div
              class="
                form-check
                block
                w-full
                p-4
                m-2
                border
                rounded-lg
                border-gray-400
              "
            >
              <input
                class="
                  form-check-input
                  appearance-none
                  rounded-full
                  h-4
                  w-4
                  border border-gray-300
                  bg-white
                  checked:bg-blue-600 checked:border-blue-600
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  cursor-pointer
                "
                type="radio"
                name="saveRegular"
                id="save-regular-no"
              />
              <label
                class="form-check-label inline-block text-gray-500"
                for="save-regular-no"
              >
                否
              </label>
            </div>
          </div>

          <div class="mt-10">
            <PageBtns @open="openModal" proceedText="送出" :valid="valid" />
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import PageBtns from "@/components/pageElements/PageBtns.vue";
import ExchangeCalc from "@/components/formElements/ExchangeCalc.vue";
export default {
  name: "Foreign-Exchange",
  props: {},
  components: { PageBtns, ExchangeCalc },
  data() {
    return {
      firstname: "",
      lastname: "",
      errorMsg: [],
      valid: false,
      proceedText: "送出",
      mockApi: {
        inputCurrency: "美金",
        exchangeCurrency: "台幣",
        exchangeRate: 34.5,
        reportTime: "2021/12/01 15:33",
      },
    };
  },
  watch: {
    firstname() {
      this.checkValid();
    },
    lastname() {
      this.checkValid();
    },
  },
  computed: {
    transContinue() {
      return this.$store.state.usedtxt.continue;
    },
  },
  methods: {
    openModal() {
      console.log("openModal");
    },
    checkValid() {
      let nameRegex = /^[A-Z,'-]+$/i;
      const nameCheckA = nameRegex.test(this.firstname);
      const nameCheckB = nameRegex.test(this.lastname);
      this.errorMsg = [];

      if (!this.firstname || !this.lastname) {
        this.errorMsg.push(this.$store.state.usedtxt.errorBlank);
      }

      if (this.firstname.trim().length < 2 || this.lastname.trim().length < 2) {
        this.errorMsg.push(this.$store.state.usedtxt.errorShort);
      } else if (!nameCheckA || !nameCheckB) {
        this.errorMsg.push(this.$store.state.usedtxt.errorCharacter);
      }

      if (this.errorMsg.length) {
        this.valid = false;
        return;
      }
      this.valid = true;
      return;
    },
    closeErrorAlert() {
      this.errorMsg = [];
    },
  },
};
</script>

<style scoped lang='scss'>
.input-wrapper__amount::after {
  content: attr(data-currency);
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translate(0, -50%);
}
</style>