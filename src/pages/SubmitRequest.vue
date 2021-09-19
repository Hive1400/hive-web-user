<template>
  <div class="absolute h-screen w-screen flex-col flex">
    <Header>
      <div class="flex justify-around pt-8 px-8 pb-6 h-20 items-center">
        <div class="flex flex-grow justify-center items-center mr-8">
          <p class="text-white text-xl font-bold px-4 text-center">
            ثبت درخواست
          </p>
        </div>
        <i class="bi bi-chevron-left text-4xl"></i>
      </div>
    </Header>

    <div
      style="margin-top: -60px"
      class="pt-16 pb-36 overflow-y-auto w-screen h-screen"
    >
      <div
        v-for="i in 20"
        :key="i"
        class="rounded-full mx-8 my-6"
        style="box-shadow: gray 0px 0px 8px 0px"
      >
        <p class="text-orange text-lg p-2 mr-2 font-bold">عنوان ها</p>
      </div>
    </div>

    <navigation>
      <div class="h-30 flex justify-around py-6 flex-col">
        <div class="flex px-8">
          <div
            class="
              bg-green-700
              rounded-full
              text-white
              py-2
              w-28
              text-center
              mt-4
              font-bold
            "
          >
            رزرو
          </div>

          <input
            type="number"
            name=""
            id=""
            placeholder="کد تخفیف"
            class="
              rounded-full
              border-2 border-yellow-600
              w-36
              h-10
              text-center
              mx-3
              outline-none
              shadow-md
            "
          />

          <div
            class="
              bg-green-700
              rounded-full
              text-white
              py-2
              w-28
              text-center
              mt-4
              font-bold
              
            "
          >
            ثبت آنلاین
          </div>
        </div>
        <div class="border-2 border-yellow-600 rounded-full mx-auto mb-4 w-56">
          <p class="text-orange px-6 py-3 font-bold text-lg">قیمت:</p>
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