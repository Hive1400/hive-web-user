<template>
  <div class="flex flex-col px-8 h-full">
    <div v-if="!resultMessage" class="my-6">
      <form>
        <p class="text-center font-bold mb-6">
          برای حساب کاربری خود<br />
          یک رمزعبور حداقل 8 کاراکتری وارد کنید
        </p>
        <label>
          <p class="font-bold">رمزعبور</p>
          <input
            type="password"
            ref="password"
            class="input-filed"
            placeholder="با حروف و اعداد انگلیسی وارد شود"
            v-model="password"
            @input="typing"
          />
        </label>
        <label>
          <p class="font-bold">تکرار رمزعبور</p>
          <input
            type="password"
            ref="rePassword"
            class="input-filed"
            placeholder="با حروف و اعداد انگلیسی وارد شود"
            v-model="rePassword"
            @input="typing"
          />
        </label>
      </form>
      <p class="text-center font-bold text-red-600 h-8 pt-2 my-4">
        {{ errorMessage }}
      </p>
    </div>
    <div v-else class="border-2 border-blue rounded-full w-full px-6">
      <p class="text-green-400 font-bold text-xl text-center">
        {{ resultMessage }}
      </p>
    </div>
    <next-btn @click="nextLevel" :loading="loading" />
  </div>
</template>

<script>
import NextBtn from "./NextBtn.vue";
export default {
  props: ["data"],
  inject: ["baseUrl"],
  components: { NextBtn },
  data() {
    return {
      loading: false,
      password: "",
      rePassword: "",
      errorMessage: "",
      resultMessage: "",
    };
  },
  methods: {
    nextLevel() {
      if (!this.password || this.password.length < 8) {
        this.invalidAnim("password");
        this.errorMessage = "طول رمز عبور باید حداقل 8 کاراکتر باشد";
      } else if (this.rePassword != this.password) {
        this.invalidAnim("rePassword");
        this.errorMessage = "رمز عبور و تکرار رمز عبور همسان نیست";
      } else {
        const self = this
        this.loading = true;
        this.axios
          .post(this.baseUrl + "/agent-resend-verify-code")
          .then((response) => {
            self.loading = true;
            if(response.flag){
                self.resultMessage = "رمز عبور شما با موفقیت تغییر کرد"
                localStorage.accessToken = self.data.accessToken
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        this.$emit("nextLevel", { password: this.password });
      }
    },
    invalidAnim(el) {
      const element = this.$refs[el];
      element.classList.add("invalid", "border-invalid");
      setTimeout(() => {
        element.classList.remove("invalid");
      }, 200);
    },
    typing(e) {
      e.target.classList.remove("border-invalid");
    },
  },
};
</script>

<style>
</style>