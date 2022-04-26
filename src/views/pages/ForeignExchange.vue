<template>
  <main class="checkout relative bg--lightgray main__wrapper">
    <div :class="{ 'dim-bg': modalIsOpen }"></div>

    <Modal
      :isOpen="modalIsOpen"
      @close="closeModal"
      :title="modalTitle"
      :text="modalText"
      :type="modalType"
    />

    <!-- start main content -->
    <div class="container mx-auto p-2">
      <form action="#">
        <div class="max-w-sm mx-auto my-2 bg-white px-5 py-2">
          <ExchangeCalc
            :inputCurrency="mockApi.inputCurrency"
            :exchangeCurrency="mockApi.exchangeCurrency"
            :exchangeRate="mockApi.exChangeRate"
            :reportTime="mockApi.reportTime"
          />
        </div>

        <div class="max-w-sm mx-auto my-2 bg-white px-5 py-2">
          <div class="flex justify-between">
            <p class="form-group-label inline-flex">我要買入</p>
            <img
              src="@/assets/info.svg"
              alt="info-icon"
              @click="openModal()"
              class="cursor-pointer inline-flex pr-1"
            />
          </div>

          <ExchangeInput
            :inputCurrency="mockApi.inputCurrency"
            :exchangeCurrency="mockApi.exchangeCurrency"
            :exChangeRate="mockApi.exChangeRate"
            @amountInput="setForm"
          />
          <p class="form-group-label mt-5">是否存入常用?</p>
          <QuickAccess :inputData.sync="isSaveRegular" />
          <div class="w-full border rounded-md border-gray-400">
            <div
              class="
                consent-content__block
                scrollbar scrollbar-thumb-gray-200 scrollbar-thumb-rounded-full
                overflow-y-scroll
                p-4
                scrollbar-thin
              "
            >
              <p>外匯收支或交易申報辦法規定</p>
              <p>
                條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容條款內容
              </p>
            </div>
          </div>
          <div class="w-full border rounded-md border-gray-400 px-4 py-5 mt-2">
            <input
              type="checkbox"
              id="checkbox"
              v-model="consentChecked"
              class="
                form-check-input
                h-5
                w-5
                border border-gray-300
                rounded-sm
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mr-2
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-leftcursor-pointer
              "
            />
            <label
              for="checkbox"
              class="form-check-label inline-block text-gray-800"
              >我已審閱並同意上述條款</label
            >
          </div>

          <div class="mt-10">
            <PageBtn
              @goNext="submitForm()"
              proceedText="送出"
              :disabled="!(exchangeData['form-is-valid'] && consentChecked)"
            />
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import PageBtn from "@/components/pageElements/PageBtn.vue";
import ExchangeCalc from "@/components/formElements/ExchangeCalc.vue";
import ExchangeInput from "@/components/formElements/ExchangeInput.vue";
import QuickAccess from "@/components/formElements/QuickAccess.vue";
import Modal from "@/components/pageElements/Modal.vue";
export default {
  name: "Foreign-Exchange",
  props: {},
  components: { PageBtn, ExchangeCalc, QuickAccess, ExchangeInput, Modal },
  data() {
    return {
      modalIsOpen: false,
      modalTitle: "",
      modalText: "",
      modalType: "",
      consentChecked: false,
      exchangeData: { "form-is-valid": false },
      isSaveRegular: true,
      proceedText: "送出",
      mockApi: {
        inputCurrency: "美金",
        exchangeCurrency: "台幣",
        exchangeRate: 34.5,
        reportTime: "2021/12/01 15:33",
      },
    };
  },
  methods: {
    openModal() {
      this.modalTitle = "我要買入說明";
      this.modalText =
        "內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明";
      this.modalType = "consent";
      this.modalIsOpen = true;
    },
    closeModal() {
      this.modalTitle = "";
      this.modalText = "";
      this.modalType = null;
      this.modalIsOpen = false;
    },
    setForm(val) {
      this.exchangeData = val;
    },
    submitForm() {
      /* send post request to submit form data */
    },
  },
};
</script>

<style scoped lang='scss'>
.consent-content__block {
  height: 5em;
}
.input-wrapper__amount::after {
  content: attr(data-currency);
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translate(0, -50%);
}
.dim-bg {
  position: absolute;
  top: -20%;
  left: 0;
  height: 140%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
}
</style>