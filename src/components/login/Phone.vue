<template>
  <div class="flex flex-col px-8 py-2 h-full">
    <p class="text-center font-bold text-red-600 py-2 mt-2" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <div class="my-4">
      <p class="text-center font-bold mb-16">
        ما برای شما یک پیامک حاوی رمز یک بر مصرف بر روی این شماره ارسال میکنیم
      </p>
      <input
        class="input-filed"
        style="direction: ltr"
        type="tel"
        ref="phone"
        v-model="phone"
        @keypress="checkLength"
        placeholder="09 - - - - - - - - -"
      />
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
      phone: "",
      loading: false,
    };
  },
  inject: ["userBaseUrl"],
  methods: {
    nextLevel() {
      let patt = /09.*/g;
      if (this.phone.length < 11 || this.phone.match(patt) != this.phone) {
        this.invalidAnim("phone");
        this.errorMessage = "شماره موبایل خود را به درستی وارد کنید";
      } else if (!this.loading) {
        const self = this;
        this.loading = true;
        const body = this.data;
        body.phone = String(this.phone);
        const query = Object.keys(body)
          .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(body[k]);
          })
          .join("&");
        this.axios
          .post(this.userBaseUrl + "/userRegister?" + query)
          .then((response) => {
            self.loading = false;
            self.errorMessage = "";
            if (response.data.flag) {
              self.$emit("nextLevel", {
                phone: self.phone
              });
            }
          })
          .catch(function (error) {
            self.loading = false;
            if (error.response.status == 500) {
              self.errorMessage =
                error.response.data.error || error.response.data;
            }
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
    checkLength(e) {
      e.target.classList.remove("border-invalid");
      if (String(e.target.value).length > 10) {
        e.preventDefault();
      }
    },
  },
};
</script>

<style>
</style>