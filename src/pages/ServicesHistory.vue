<template>
  <div class="absolute h-screen w-screen flex-col flex">
    <Header>
      <div
        class="flex justify-around pt-8 px-8 pb-6 h-20 items-center text-white"
      >
        <i class="bi bi-clock-history text-4xl"></i>
        <div class="flex flex-grow justify-center items-center">
          <p class="text-xl font-bold px-4">تاریخچه خدمات و کالا</p>
        </div>
        <i class="bi bi-chevron-left text-4xl"></i>
      </div>
    </Header>

    <div class="w-screen overflow-y-auto -mt-12 py-20 px-8 mb-4 flex flex-col">
      <div class="flex flex-col mb-4" v-for="(n, i) in 10" :key="i">
        <div
          class="flex justify-between items-center rounded-full mt-3 px-4"
          style="box-shadow: gray 0px 0px 8px 0px"
          @click="itemsExpanded[i] = !itemsExpanded[i]"
        >
          <p class="py-3 my-px font-bold text-orange">
            عنوان خدمت یا کالای دریافتی
          </p>
          <i
            class="bi bi-chevron-left text-lg"
            style="transition: all 0.2s"
            :style="[
              itemsExpanded[i]
                ? 'transform: rotate(-90deg);'
                : 'transform: rotate(0deg);',
            ]"
            :class="[itemsExpanded[i] ? 'text-orange' : 'text-gray-500']"
          ></i>
        </div>
        <transition name="fade">
          <div class="mt-6 px-4" v-if="itemsExpanded[i]">
            <p class="text-center font-bold">
              شما در تاریخ 1400/05/29 در ساعت 22:15 به شما خدمت (عنوان خدمت)
              اراِه گردید
            </p>
            <div class="flex mt-4 flex-col">
              <div class="flex">
                <p class="font-bold w-24 flex-none">نام کارگزار:</p>
                <p class="font-bold text-orange">نام کارگزار</p>
              </div>
              <div class="flex my-4">
                <p class="font-bold w-24 flex-none">مبلغ خدمت:</p>
                <p class="font-bold text-orange">
                  22.000.000 <span class="text-gray-500">ريال</span>
                </p>
              </div>

              <div class="flex">
                <p class="font-bold w-24 flex-none">آدرس:</p>
                <p class="font-bold text-orange flex-grow">
                  شما در تاریخ 1400/05/29 در ساعت 22:15 به شما خدمت (عنوان خدمت)
                  اراِه
                </p>
              </div>
            </div>
          </div>
        </transition>
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
            درخواست خدمت و کالای جدید
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
  data() {
    return {
      itemsExpanded: [],
    };
  },
};
</script>

<style scoped>
.fade-enter-active {
  opacity: 0;
  transform: translateY(-10%);
  transition: all 0.3s ease;
}

.fade-enter-to {
  opacity: 100;
  transform: translateY(0%);
}

.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
</style>