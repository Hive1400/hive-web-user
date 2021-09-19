<template>
  <div class="h-screen w-screen flex-col flex">
    <Header
    class="flex-none"
      style="transition: all 0.3s"
      :class="[sideOpen ? 'h-20 radius-none' : search ? 'h-20' : 'h-44']"
    >
      <div class="flex justify-between p-6 items-center">
        <menu-icon
          class="w-7 h-7 my-2"
          :fill="'#fff'"
          @click="sideOpen = !sideOpen"
        />
        <div
          v-if="!sideOpen"
          class="rounded-full mx-4 bg-white h-11 flex flex-grow items-center"
        >
          <i class="bi bi-search text-xl text-gray-400 mx-4"></i>
          <input
            type="text"
            class="rounded-full outline-none h-11 font-bold flex-grow"
            placeholder="جست و جو"
            @focus="search = true"
            @blur="search = false"
          />
        </div>

        <back-icon
          v-if="sideOpen"
          @click="sideOpen = false"
          class="w-9"
          :fill="'#fff'"
        />
        <menu-icon
          v-else
          @click="sideOpen = false"
          class="w-8"
          :fill="'#fff'"
        />
      </div>
    </Header>



    <side-bar v-if="sideOpen" class="side" ref="side" />




    <div v-if="!search && !sideOpen" class="flex-none">
      <div
        style="margin-top: -60px"
        class="
          h-40
          mx-auto
          w-3/4
          bg-green-700
          rounded-3xl
          relative
          z-20
          border-2 border-gray-300
          flex-none
        "
      ></div>

      <div
        class="py-24 mb-4 w-screen overflow-y-auto"
        style="margin-top: -90px"
      >
        <div class="grid grid-cols-2 gap-y-6 w-full pt-6">
          <div v-for="i in 4" :key="i" class="w-40 mx-auto flex flex-col">
            <div
              class="h-36 rounded-3xl bg-gray-300 border-2 border-orange flex"
            >
              <p
                class="
                  bg-white
                  text-orange
                  font-bold
                  text-lg text-center
                  relative
                  w-full
                  py-1
                  my-auto
                "
              >
                به زودی
              </p>
            </div>
            <p
              class="
                rounded-full
                bg-orange
                text-white text-center
                py-1
                mt-2
                font-bold
                text-lg
              "
            >
              آموزشی
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else-if="!sideOpen"
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

    <Navigation v-if="!sideOpen">
      <div class="flex justify-around py-2 mb-4">
        <services-icon
          :fill="type == 'services' ? '#fe724e' : '#ccc'"
          class="w-12 mt-1"
          @click="handleClickNav('services')"
        />
        <commodity-icon
          :fill="type == 'commodity' ? '#fe724e' : '#ccc'"
          class="h-20 w-12 px-px -mb-px"
          @click="handleClickNav('commodity')"
        />
      </div>
    </Navigation>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BackIcon from "../components/icons/back-icon.vue";
import CommodityIcon from "../components/icons/commodity-icon.vue";
import MenuIcon from "../components/icons/menu-icon.vue";
import ServicesIcon from "../components/icons/services-icon.vue";
import Navigation from "../components/Navigation.vue";
import SideBar from "../components/SideBar.vue";
export default {
  components: {
    Navigation,
    Header,
    ServicesIcon,
    CommodityIcon,
    SideBar,
    MenuIcon,
    BackIcon,
  },
  data() {
    return {
      search: false,
      type: "services",
      sideOpen: false,
    };
  },
  methods: {
    handleClickNav(item) {
      if (this.type != item) {
        this.type = item;
      }
    },
  },
  watch: {
    sideOpen(v) {
      if (v) {
        setTimeout(() => {
          this.$refs.side.$el.classList.add("side-open");
        }, 100);
      }
    },
  },
};
</script>

<style>
.side {
  transform: translateX(120%);
}
.side-open {
  transition: all 0.3s ease;
  transform: translateX(0%);
}

.radius-none {
  border-radius: 0px !important;
}
</style>