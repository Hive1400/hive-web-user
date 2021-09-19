<template>
  <div class="absolute h-screen w-screen flex-col flex">
    <Header>
      <div class="flex justify-around pt-8 px-8 pb-6 h-20 items-center">
        <coins-icon :fill="'#fff'" class="w-10" />
        <div class="flex flex-grow justify-center items-center">
          <p class="text-xl font-bold px-4 text-white">اعتبار حساب</p>
        </div>
        <back-icon :fill="'#fff'" class="w-10" @click="$router.go(-1)" />
      </div>
    </Header>

    <div
      class="
        flex flex-col
        py-24
        mb-8
        w-screen
        h-screen
        overflow-y-auto
        -mt-12
        pt-8
        px-8
      "
    >
      <div v-if="page == 'accountCredit'">
        <p class="font-bold text-xl flex mt-14">
          <coins-icon :fill="'#fe724e'" class="w-8 mx-2" />
          موجودی:
        </p>
        <div
          class="rounded-full mt-12 flex items-center"
          style="box-shadow: gray 0px 0px 4px 0px"
        >
          <p class="text-center py-2 font-bold text-xl flex-grow mr-12">
            22.000.000
          </p>
          <p class="font-bold text-xl px-3">ریال</p>
        </div>
      </div>
      <div v-else-if="page == 'increaseCredit'">
        <p class="font-bold text-xl flex mt-14">
          <i class="bi bi-wallet2 text-3xl text-orange mx-2"></i>
          میزان افزایش موجودی:
        </p>
        <div
          class="rounded-full mt-12 flex items-center"
          style="box-shadow: gray 0px 0px 4px 0px"
        >
          <input
            type="number"
            class="
              text-center
              py-2
              px-12
              font-bold
              text-xl
              w-full
              rounded-full
              outline-none
            "
            style="direction: ltr"
          />
          <p class="font-bold text-xl px-3">ریال</p>
        </div>
        <p class="font-bold text-lg mt-4 text-center">
          لطفا میزان افزایش موجودی حود را وارد نمایید
        </p>
        <p class="font-bold text-lg mt-20 py-4 text-center">
          یکی از درگاه های پرداخت زیر را انتخاب کنید
        </p>
        <div class="grid grid-cols-3 w-full gap-y-4 gap-x-2">
          <div
            class="border-2 w-24 h-24 self-center mx-auto"
            :class="{ 'border-orange shadow': getway[i] }"
            v-for="i in 6"
            :key="i"
            @click="
              getway = [];
              getway[i] = true;
            "
          ></div>
        </div>
      </div>
      <div
        v-else-if="page == 'resultPay'"
        class="border-2 border-orange rounded-full w-full px-6 py-3 my-auto"
      >
        <p class="text-green-400 font-bold text-lg text-center">
          افزایش اعتبار شما با موفقیت انجام شد
        </p>
      </div>
    </div>

    <navigation>
      <div class="h-30 flex m-5">
        <div
          class="
            bg-orange
            rounded-full
            h-14
            mb-4
            mx-4
            w-full
            flex
            justify-center
            text-white
            items-center
          "
          @click="handleClick"
        >
          <i
            v-if="page == 'accountCredit'"
            class="bi bi-plus-lg text-2xl ml-2"
          ></i>
          <p class="text-xl text-center my-auto font-bold">
            {{ buttonText }}
          </p>
        </div>
      </div>
    </navigation>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BackIcon from "../components/icons/back-icon.vue";
import CoinsIcon from "../components/icons/coins-icon.vue";
import Navigation from "../components/Navigation.vue";

export default {
  components: { Navigation, Header, BackIcon, CoinsIcon },
  inject: ["paymentBaseUrl"],
  data() {
    return {
      increaseCredit: false,
      getway: [],
      page: "accountCredit",
      buttonText: "افزایش موجودی",
    };
  },
  methods: {
    handleClick() {
      if (this.page == "accountCredit") {
        this.page = "increaseCredit";
        this.buttonText = "پرداخت آنلاین";
      } else if (this.page == "increaseCredit") {
        this.page = "resultPay";
        this.buttonText = "برگشت به صفحه اصلی";
      } else if (this.page == "resultPay") {
        console.log();
      }
    },
  },
  created() {
    this.axios
      .get(this.paymentBaseUrl + "/check-user-charge/ver1", {
        headers: {
          Authorization: "Bearer " + localStorage.accessToken,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>