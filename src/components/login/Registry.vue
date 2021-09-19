<template>
  <div class="flex flex-col px-8 py-2 h-full">
    <p class="text-center font-bold text-red-600 pt-3" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <div class="my-6">
      <form>
        <label>
          <p class="font-bold">نام و نام خانوادگی خود را وارد کنید</p>
          <input
            type="text"
            ref="name"
            class="input-filed"
            placeholder="با حروف فارسی وارد شود"
            v-model="data.name"
            @input="typing"
          />
        </label>
        <label>
          <p class="font-bold">کد ملی خود را وارد کنید</p>
          <input
            type="tel"
            ref="nationalCode"
            class="input-filed"
            placeholder="کد 10 رقمی وارد شود"
            v-model="data.nationalCode"
            :style="[data.nationalCode ? 'direction: ltr' : '']"
            @keypress="checkLength"
          />
        </label>
        <div>
          <p class="font-bold inline-block">تاریخ تولد</p>
          <span class="mr-2 text-gray-500">رو ی اعداد دست را جابه جا کنید</span>
        </div>
        <div class="flex justify-center my-6 text-white" ref="birthday">
          <select v-model="birthday.day" class="bg-orange">
            <option v-for="d in days" :key="d" :value="d">
              {{ d }}
            </option>
          </select>
          <span class="text-orange text-2xl font-bold">/</span>
          <select v-model="birthday.month" class="bg-orange">
            <option v-for="m in months" :key="m" :value="m">
              {{ m }}
            </option>
          </select>
          <span class="text-orange text-2xl font-bold">/</span>
          <select v-model="birthday.year" class="bg-orange">
            <option v-for="y in years" :key="y" :value="y">
              {{ y }}
            </option>
          </select>
        </div>
        <div class="flex justify-around text-xl" ref="sex">
          <label :for="s.name" v-for="s in sex" :key="s"
            >{{ s.title }}
            <input
              type="radio"
              name="sex"
              :id="s.name"
              :value="s.name"
              class="mx-2"
              v-model="data.sex"
            />
          </label>
        </div>
      </form>
    </div>
    <next-btn @click="nextLevel" />
  </div>
</template>

<script>
import NextBtn from "./NextBtn.vue";
export default {
  components: { NextBtn },
  data() {
    return {
      sex: [
        { name: "true", title: "مرد" },
        { name: "false", title: "زن" },
      ],
      years: ["سال"],
      months: [],
      days: ["روز"],
      birthday: { year: "سال", month: "ماه", day: "روز" },
      data: {},
      errorMessage: "",
    };
  },
  created() {
    for (let i = 50; i >= 0; i--) {
      this.years.push(1350 + i);
    }
    this.months = [
      "ماه",
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بمهن",
      "اسفند",
    ];
  },
  watch: {
    "birthday.month": function () {
      let last = this.months.indexOf(this.data.month) <= 6 ? 31 : 30;
      for (let i = 1; i <= last; i++) {
        this.days.push(i);
      }
    },
    birthday: {
      handler() {
        this.data.birthday =
          this.birthday.year +
          "-" +
          this.months.indexOf(this.birthday.month) +
          "-" +
          this.birthday.day;
      },
      deep: true,
    },
  },
  methods: {
    nextLevel() {
      let data = this.data;
      if (!data.name) {
        this.invalidAnim("name");
        this.errorMessage = "نام و نام خانوادگی را به درستی وارد کنید";
      } else if (!this.checkCodeMeli(String(data.nationalCode))) {
        this.invalidAnim("nationalCode");
        this.errorMessage = "کد ملی را به درستی وارد کنید";
      } else if (
        this.birthday.year == "سال" ||
        this.birthday.month == "ماه" ||
        this.birthday.day == "روز"
      ) {
        this.invalidAnim("birthday");
        this.errorMessage = "تاریخ تولد را به درستی وارد کنید";
      } else if (!data.sex) {
        this.invalidAnim("sex");
        this.errorMessage = "جنسیت خود را انتخاب کنید";
      } else {
        this.$emit("nextLevel", this.data);
        this.errorMessage = "";
      }
    },

    invalidAnim(el) {
      const element = this.$refs[el];
      element.classList.add("invalid", "border-invalid");
      setTimeout(() => {
        element.classList.remove("invalid");
      }, 200);
    },
    typing(e) {
      e.target.classList.remove("border-invalid");
    },
    checkLength(e) {
      this.typing(e);
      if (String(e.target.value).length > 9) {
        e.preventDefault();
      }
    },
    checkCodeMeli(code) {
      if(code.length < 10) return false;
      var L = code.length;
      if (L < 8 || parseInt(code, 10) == 0) return false;
      code = ("0000" + code).substr(L + 4 - 10);
      if (parseInt(code.substr(3, 6), 10) == 0) return false;
      var c = parseInt(code.substr(9, 1), 10);
      var s = 0;
      for (var i = 0; i < 9; i++)
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
      s = s % 11;
      return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
    },
  },
};
</script>

<style scoped>
select {
  box-shadow: inset rgba(255, 255, 255, 0.438) 0px 5px 10px 2px;
  @apply rounded-full py-1 px-6 appearance-none outline-none flex-grow;
}
option {
  @apply text-black  text-center;
}
span {
  @apply mx-2;
}
</style>