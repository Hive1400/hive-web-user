<template>
  <div  class="fixed top-20">
    <div
      class="flex-col flex px-6 bg-white z-0 h-screen w-80"
      style="box-shadow: gray 0px 8px 20px 0px"
    >
      <div v-for="i in 10" :key="i" @click="$router.push('/accountCredit')">
        <div class="flex items-center border-t pr-4 pt-1" v-if="i == 1">
          <coins-icon class="w-7 h-7" :fill="'#fe724e'" />
          <p class="p-4 font-bold -mb-1">اعتبار حساب</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coinsIcon from "./icons/coins-icon.vue";
export default {
  components: { coinsIcon },
};
</script>

<style>
</style>