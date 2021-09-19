<template>
  <div class="flex flex-col px-8 h-full ">
    <div class="my-6 ">
      <form>
        <p class="text-center font-bold mb-6">
          برای حساب کاربری خود<br />
          یک رمزعبور حداقل 8 کاراکتری وارد کنید
        </p>
        <label for="password">
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
        <label for="re-password">
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
      <p class="text-center font-bold text-red-600 h-8 pt-2 my-4" >
        {{ errorMessage }}
      </p>
    </div>
    <next-btn @click="nextLevel" />
  </div>
</template>

<script>
import NextBtn from "./NextBtn.vue";
export default {
  components: { NextBtn },
  data() {
    return {
      password: "",
      rePassword: "",
      errorMessage: "",
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
        this.$emit("nextLevel", { password: this.password });
      }
    },
    invalidAnim(el) {
      const element = this.$refs[el];
      element.classList.add("invalid", "border-invaid");
      setTimeout(() => {
        element.classList.remove("invalid");
      }, 200);
    },
    typing(e) {
      e.target.classList.remove("border-invaid");
    },
  },
};
</script>

<style>
</style>