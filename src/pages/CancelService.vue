<template>
  <div class="absolute h-screen w-screen flex-col flex">
    <Header>
      <div class="flex justify-around pt-8 px-8 pb-6 h-20 items-center">
        <div class="flex flex-grow justify-center items-center mr-8">
          <p class="text-white text-xl font-bold px-4">لغو درخواست</p>
        </div>
        <i class="bi bi-chevron-left text-4xl"></i>
      </div>
    </Header>
    <div class="py-24 mb-8 w-screen overflow-y-auto -mt-12 pt-20 px-8">
      <p class="text-xl font-bold">علت لغو درخواست را بیان کنید:</p>
      <div class="flex flex-col mt-12">
        <div class="flex justify-end">
          <p class="px-12">بله</p>
          <p>خیر</p>
        </div>
        <div
          class="flex mt-8 justify-between items-center"
          v-for="i in 5"
          :key="i"
        >
          <p class="flex-grow">به دلیل تاخیر در رسیدن خدمت رسان</p>
          <input type="radio" :name="i" id="" class="ml-14" />
          <input type="radio" :name="i" id="" />
        </div>
      </div>

      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        class="border-2 border-yellow-600 rounded-3xl w-full mt-8 outline-none p-4"
        placeholder="توضیحات بیشتر"
      ></textarea>
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
          "
        >
          <p class="text-xl text-white text-center my-auto font-bold">
            ثبت نظرات
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