<template>
  <div class="absolute h-screen w-screen flex-col flex">
    <Header>
      <div
        class="flex justify-around pt-8 px-8 pb-6 h-20 items-center text-white"
      >
        <i class="bi bi-person-circle text-4xl"></i>
        <div class="flex flex-grow justify-center items-center">
          <p class="text-xl font-bold px-4">اعتبار حساب</p>
        </div>
        <i class="bi bi-chevron-left text-4xl"></i>
      </div>
    </Header>
    <div
      class="
        w-screen
        overflow-y-auto
        -mt-12
        pt-20
        px-8
        pb-24
        mb-8
        flex flex-col
      "
    >
      <i
        class="bi bi-person-circle text-9xl text-gray-300 mx-auto text-center"
      ></i>
      <div class="flex flex-col mt-4" v-for="(n, i) in fileds" :key="i">
        <p class="font-bold">{{ n.title }}:</p>
        <div
          class="
            rounded-full
            mt-3
            self-end
            w-64
            flex
            justify-center
            items-center
            h-11
          "
          :class="{ 'border-2 border-yellow-600': editMode }"
          :style="[!editMode ? 'box-shadow: gray 0px 0px 8px 0px' : '']"
        >
          <input
            v-if="editMode"
            :type="n.type"
            v-model="values[n.name]"
            class="
              rounded-full
              outline-none
              w-full
              text-center
              px-2
              appearance-none
              bg-white
            "
          />
          <p v-else class="text-center font-bold text-md text-orange">
            {{ values[n.name] }}
          </p>
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
            text-white
            items-center
          "
          :class="{ 'opacity-80': loading }"
          @click="handleClick"
        >
          <i v-if="!editMode" class="bi bi-plus-lg text-2xl ml-2"></i>
          <div
            v-if="loading"
            class="ease-linear rounded-full border-2 h-8 w-8 ml-2 loader"
          ></div>
          <p class="text-xl text-center my-auto font-bold">
            {{ editMode ? "انجام شد" : "ویرایش پروفایل" }}
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
      fileds: [
        { title: "نام و نام خانوادگی", type: "text", name: "full-name" },
        { title: "نام پدر", type: "text", name: "father-name" },
        { title: "کد ملی", type: "nomber", name: "national-code" },
        { title: "تاریخ تولد", type: "date", name: "birthday" },
        { title: "موبایل", type: "number", name: "phone" },
      ],
      values: {},
      editMode: false,
      loading: false,
    };
  },
  methods: {
    handleClick() {
      if (!this.loading) {
        if (this.editMode) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.editMode = false;
          }, 2000);
        } else {
          this.editMode = true;
        }
      }
    },
  },
};
</script>

<style>
</style>