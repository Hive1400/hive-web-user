<template>
  <div class="flex flex-col px-8 py-2 h-full">
    <p class="text-center text-lg font-bold py-6">
      برای وارد شدن به حساب کاربری خود<br />لطفا کد ملی و رمز عبور را وارد کنید
    </p>
    <form action="">
      <div class="mt-6">
        <label for="username">
          <p class="font-bold">کدملی</p>
          <input
            type="number"
            ref="username"
            class="input-filed"
            placeholder="کد 10 رقمی وارد شود"
            v-model="username"
            @keypress="checkLength"
          />
        </label>
        <label for="password">
          <p class="font-bold">رمز عبور</p>
          <input
            type="password"
            ref="password"
            class="input-filed"
            placeholder="با حروف و اعداد اینگلیسی وارد شود"
            v-model="password"
          />
        </label>
      </div>
    </form>
    <p
      class="text-lg font-bold text-red-600 py-2 hidden"
      @click="forgetPassword"
    >
      فراموشی رمز عبور
    </p>
    <p class="text-center font-bold text-red-600 py-3 h-14">
      {{ errorMessage }}
    </p>
    <next-btn @click="login" :loading="loading" />
  </div>
</template>

<script>
import NextBtn from "./NextBtn.vue";
export default {
  components: { NextBtn },
  inject: ["userBaseUrl"],
  data() {
    return {
      loading: false,
      username: "",
      password: "",
      accessToken: "",
      userId: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      if (!this.checkCodeMeli(String(this.username))) {
        this.invalidAnim("username");
        this.errorMessage = "کد ملی خود را به درستی وارد کنید";
      } else if (!this.password || this.password.length < 8) {
        this.invalidAnim("password");
        this.errorMessage = "رمز عبور باید شامل حداقل 8 کاراکتر باشد";
      } else if (!this.loading) {
        const self = this;
        this.loading = true;
        this.errorMessage = "";
        const body = { username: this.username, password: this.password };
        const query = Object.keys(body)
          .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(body[k]);
          })
          .join("&");
        this.axios
          .post(this.userBaseUrl + "/userLogin?" + query)
          .then((response) => {
            self.loading = false;
            if (response.data.flag) {
              localStorage.setItem(
                "accessToken",
                response.data.data.access_token
              );
              self.$router.push("/");
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
    
    checkVerify() {
      const self = this;
      this.axios
        .post(
          this.userBaseUrl + "/phone-verify-check",
          {},
          {
            headers: {
              Authorization: "Bearer " + this.accessToken,
            },
          }
        )
        .then((response2) => {
          self.loading = false;
          if (response2.data.flag) {
            localStorage.setItem("accessToken", self.accessToken);
            self.$router.push("/");
          }
        })
        .catch(function (error2) {
          if (error2.response.status == 500) {
            self.reSendCode();
          }
        });
    },

    reSendCode() {
      const self = this;
      this.axios
        .get(this.userBaseUrl + "/user-resend-verify-code?id=" + this.userId, {
          headers: {
            Authorization: "Bearer " + this.accessToken,
          },
        })
        .then((response) => {
          self.loading = false;
          console.log(response);
          this.$emit("verifyMobile", {
            accessToken: self.accessToken,
            userId: self.userId,
          });
        })
        .catch(function (error) {
          if (error.response.status == 500) {
            self.errorMessage =
              error.response.data.error || error.response.data;
          }
        });
    },

    forgetPassword() {
      this.$emit("forgetPassword", "");
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
      if (String(e.target.value).length > 9) {
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