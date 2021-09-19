<template>
  <div class="flex flex-col px-8 py-2 h-full">
    <p class="text-center font-bold text-red-600 py-2 mt-2" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <div class="my-4">
      <form>
        <p class="text-center font-bold mb-6">
          برای بازیابی رمز عبور حساب کاربری خود<br />
          کد ملی و شماره موبایل خود را وارد کنید
        </p>
        <label for="password">
          <p class="font-bold">کد ملی</p>
          <input
            type="number"
            ref="nationalCode"
            class="input-filed"
            placeholder="کد 10 رقمی وارد شود"
            v-model="nationalCode"
            @input="typing"
            @keypress="checkLength(10, $event)"
          />
        </label>
        <label for="re-password">
          <p class="font-bold">موبایل</p>
          <input
            type="tel"
            ref="phone"
            class="input-filed"
            style="direction: ltr"
            placeholder="09 - - - - - - - - -"
            v-model="phone"
            @input="typing"
            @keypress="checkLength(11, $event)"
          />
        </label>
      </form>
    </div>
    <next-btn @click="nextLevel" :loading="loading" />
  </div>
</template>

<script>
import NextBtn from "./NextBtn.vue";

export default {
  props: ["data"],
  components: { NextBtn },
  data() {
    return {
      errorMessage: "",
      nationalCode: "",
      phone: "",
      loading: false,
    };
  },
  inject: ["baseUrl"],
  methods: {
    nextLevel() {
      if (!this.checkCodeMeli(String(this.nationalCode))) {
        this.invalidAnim("nationalCode");
        this.errorMessage = "کد ملی خود را به درستی وارد کنید";
      } else if (
        this.phone.length < 11 ||
        String(this.phone).match(/09.*/g) != String(this.phone)
      ) {
        this.invalidAnim("phone");
        this.errorMessage = "شماره موبایل خود را به درستی وارد کنید";
      } else if (!this.loading) {
        const self = this;
        this.loading = true;
        const body = this.data;
        body.phone = String(this.phone);
        this.axios
          .post(this.baseUrl + "/agent-register", body)
          .then((response) => {
            self.loading = false;
            console.log(response.data);
            if (response.flag) {
              self.$emit("nextLevel", {
                phone: self.phone,
                accessToken: response.data.access_token,
              });
            }
          })
          .catch(function (error) {
            self.loading = false;
            console.log(error);
          });
      }
    },
    invalidAnim(el) {
      const element = this.$refs[el];
      element.classList.add("invalid", "border-invalid");
      setTimeout(() => {
        element.classList.remove("invalid");
      }, 200);
    },
    checkLength(length, e) {
      e.target.classList.remove("border-invalid");
      if (String(e.target.value).length > length - 1) {
        e.preventDefault();
      }
    },
    checkCodeMeli(code) {
      if (code.length < 10) return false;
      var L = code.length;
      if (L < 8 || parseInt(code, 10) == 0) return false;
      code = ("0000" + code).substr(L + 4 - 10);
      if (parseInt(code.substr(3, 6), 10) == 0) return false;
      var c = parseInt(code.substr(9, 1), 10);
      var s = 0;
      for (var i = 0; i < 9; i++)
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
      s = s % 11;
      return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
    },
  },
};
</script>

<style>
</style>