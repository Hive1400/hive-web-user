<template>
  <div class="absolute h-screen w-screen flex-col flex">
    <Header>
      <div class="flex justify-around pt-8 px-8 pb-6 h-20 items-center">
        <div class="flex flex-grow justify-center items-center mr-8">
          <p class="text-white text-xl font-bold px-4">مشخصات خدمت رسان</p>
        </div>
        <i class="bi bi-chevron-left text-4xl"></i>
      </div>
    </Header>

    <div class="py-24 mb-12 w-screen overflow-y-auto -mt-12 pt-16 px-8">
      <div
        class="rounded-3xl flex flex-col"
        style="box-shadow: gray 0px 0px 8px 0px"
      >
        <div class="flex-grow mb-8 h-40"></div>
        <div class="flex-grow border-t-4 border-gray-300 flex flex-col">
          <p class="text-center text-orange font-bold py-2 text-xl">
            اطلاعات کارگزار
          </p>
          <div class="flex justify-between p-4 flex-grow">
            <div class="flex flex-col pl-2">
              <p class="text-right font-bold py-2">نام و نام خانوادگی:</p>
              <p
                class="
                  font-bold
                  py-1
                  px-4
                  text-orange
                  rounded-full
                  text-sm text-center
                  self-end
                  w-44
                "
                style="box-shadow: gray 0px 0px 8px 0px"
              >
                نام و نام خانوادگی کارگزار
              </p>
              <p class="text-right font-bold py-2">شماره تماس:</p>
              <p
                class="
                  font-bold
                  py-1
                  px-4
                  text-orange
                  rounded-full
                  text-sm text-center
                  w-44
                    self-end
                "
                style="box-shadow: gray 0px 0px 8px 0px"
              >
                شماره تماس کارگزار
              </p>
            </div>
            <div class="rounded-3xl border-2 border-yellow-700 w-24 h-24"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col py-6">
        <p
          class="font-bold text-xl px-4 rounded-full py-3"
          style="box-shadow: gray 0px 0px 8px 0px"
        >
          قیمت:
        </p>
        <p
          class="
            font-bold
            text-white text-center
            bg-green-600
            rounded-full
            py-3
            mt-6
            text-xl
          "
          style="box-shadow: gray 0px 0px 8px 0px"
        >
          درحال حرکت به سمت شما
        </p>
      </div>
    </div>

    <navigation>
      <div class="mx-7 my-4">
        <div
          class="
            justify-between
            mb-4
            mx-auto
            w-full
            flex
          "
        >
          <p class=" text-white text-center my-auto font-bold bg-orange
            rounded-full w-32 p-3">
            پرداخت اعتباری
          </p>
          <p class="text-white text-center my-auto font-bold bg-orange
            rounded-full w-32 p-3">
            پرداخت نقدی
          </p>
        </div>
        <div
          class="
            bg-red-600
            rounded-full
            mb-4
            mx-auto
            flex
            justify-center w-36
          "
        >
          <p class="text-lg text-white text-center my-auto py-3 font-bold">
            لغو درخواست
          </p>
        </div>
      </div>
    </navigation>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";
export default {
  components: { Header, Navigation },
};
</script>

<style>
</style>