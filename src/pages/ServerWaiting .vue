<template>
  <div class="absolute h-screen w-screen flex-col flex">
    <Header>
      <div class="flex justify-around pt-8 px-8 pb-6 h-20 items-center">
        <div class="flex flex-grow justify-center items-center mr-8">
          <p class="text-white text-xl font-bold px-4">در حال انتظار کارگزار</p>
        </div>
        <i class="bi bi-chevron-left text-4xl"></i>
      </div>
    </Header>
    <div class="py-24 mb-4 w-screen overflow-y-auto  px-8">
        <div
        class="h-64 rounded-3xl border-2 "
      >
      </div>
    <p class="text-center py-4 mt-8 text-orange font-bold">چند متن درمورده هایو نوشته شود که به ترتیب نمایش داده میشوند</p>
    </div>

    <navigation>
      <div class="h-30 flex m-5">
        <div
          class="
            bg-red-600
            rounded-full
            mb-4
            mx-auto
            px-6
            py-3
            flex
            justify-center
            shadow
          "
        >
          <p class="text-xl text-white text-center my-auto font-bold">
            لغو درخواست
          </p>
        </div>
      </div>
    </navigation>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
export default {
  components: { Header, Navigation },

}
</script>

<style>

</style>