<template>
  <main class="checkout bg--lightgray main__wrapper">
    <!-- start main content -->
    <div class="container mx-auto p-2">
      <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10">
        <form action="#">
          <p>我要買入</p>
          <div class="mt-5">
            <label for="username">Username or Email</label>
            <input
              type="text"
              id="username"
              class="block w-full p-2 border rounded border-gray-500"
            />
          </div>
          <div class="mt-5">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="block w-full p-2 border rounded border-gray-500"
            />
          </div>

          <p>選擇帳戶</p>
          <div class="mt-5">
            <label for="username">Username or Email</label>
            <input
              type="text"
              id="username"
              class="block w-full p-2 border rounded border-gray-500"
            />
          </div>
          <div class="mt-5">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="block w-full p-2 border rounded border-gray-500"
            />
          </div>

          <p>是否存入常用</p>
          <div class="mt-5">
            <label for="username">Username or Email</label>
            <input
              type="text"
              id="username"
              class="block w-full p-2 border rounded border-gray-500"
            />
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="block w-full p-2 border rounded border-gray-500"
            />
          </div>
          <div class="mt-10">
            <PageBtns
              @open="openModal"
              proceedText="transContinue"
              :valid="valid"
            />
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import PageBtns from "@/components/pageElements/PageBtns.vue";
export default {
  name: "Foreign-Exchange",
  props: {},
  components: { PageBtns },
  data() {
    return {
      firstname: "",
      lastname: "",
      errorMsg: [],
      valid: false,
      proceedText: "Pay",
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
</style>