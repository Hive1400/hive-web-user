<template>
  <div class="absolute h-screen w-screen flex-col flex">
    <Header>
      <div class="flex justify-around pt-8 px-8 pb-6 h-20 items-center">
        <div class="flex flex-grow justify-center items-center mr-8">
          <p class="text-white text-xl font-bold px-4">درخواست خدمات</p>
        </div>
        <i class="bi bi-chevron-left text-4xl"></i>
      </div>
    </Header>

    <div class="py-24 mb-4 w-screen overflow-y-auto -mt-12 pt-16 px-8">
      <div
        class="h-96 rounded-3xl"
        style="box-shadow: gray 0px 0px 8px 0px"
      ></div>
      <div class="flex justify-around my-8 text-white items-center">
        <p class="font-bold text-black">تاریخ:</p>
        <select
          class="bg-orange rounded-full py-2 px-6 appearance-none outline-none"
        >
          <option v-for="i in 10" :key="i" value="1">1400</option>
        </select>
        <span class="text-orange text-2xl font-bold">/</span>
        <select
          class="bg-orange rounded-full px-6 py-2 appearance-none outline-none"
        >
          <option value="1">1400</option>
        </select>
        <span class="text-orange text-2xl font-bold">/</span>
        <select
          class="
            bg-orange
            rounded-full
            px-6
            py-2
            text-center
            appearance-none
            outline-none
          "
        >
          <option v-for="i in 31" :key="i" value="1">{{ i }}</option>
        </select>
      </div>
      <div class="flex my-8 text-white items-center ">
        <p class="font-bold text-black">ساعت:</p>
        <div class="mx-auto">
          <select
            class="
              bg-orange
              rounded-full
              py-2
              px-6
              appearance-none
              outline-none
            "
          >
            <option v-for="i in 24" :key="i" value="1">{{ i - 1 }}</option>
          </select>
          <span class="text-orange text-2xl font-bold mx-2">:</span>
          <select
            class="
              bg-orange
              rounded-full
              px-6
              py-2
              appearance-none
              outline-none
            "
          >
            <option v-for="i in 60" :key="i" value="1">{{ i - 1 }}</option>
          </select>
        </div>
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
          "
        >
          <p class="text-xl text-white text-center my-auto font-bold">
            ثبت درخواست
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

<style scoped>
select {
  box-shadow: inset rgba(255, 255, 255, 0.438) 0px 5px 10px 2px;
}
</style>