<template>
  <div class="h-screen w-screen flex-col flex">
    <Header>
      <div class="h-44 px-8 mt-4 text-white flex flex-col">
        <div class="flex justify-between">
          <login-icon v-if="form == 'login'" :fill="'#fff'" class="w-11" />
          <registry-icon
            v-if="form == 'registry'"
            :fill="'#fff'"
            class="h-16 max-w-max -mt-px -mr-3"
          />
          <i class="bi bi-chevron-left text-4xl hidden"></i>

          <div>
            <p class="text-left font-bold">سلام</p>
            <span class="text-xs">به هایو خوش آمدید</span>
          </div>
        </div>

        <img
          class="w-24 h-24 mt-auto mx-auto"
          src="https://hive1400.ir/assets/img/logo/logo2_footer.png"
          alt=""
        />
      </div>
    </Header>

    <div class="pb-32 w-screen flex-grow flex flex-col">
      <div v-if="form == 'login'" class="flex-grow">
        <transition name="slide" mode="out-in">
          <login-form
            v-if="level == 1"
            @verify-mobile="nextLevel($event)"
            class="w-full"
          />
        </transition>
        <transition name="slide" mode="out-in">
          <otp-code
            v-if="level == 2"
            :data="data"
            class="w-full"
          />
        </transition>
        
        <!-- Forget Password -->

        <!-- <transition name="slide" mode="out-in">
          <forget-password
            v-if="level == 2"
            @next-level="nextLevel($event)"
            :data="data"
            class="w-full"
          />
        </transition>
        <transition name="slide" mode="out-in">
          <otp-code
            v-if="level == 3"
            @next-level="nextLevel($event)"
            :data="data"
            class="w-full"
          />
        </transition>
        <transition name="slide" mode="out-in">
          <change-password
            v-if="level == 4"
            @next-level="nextLevel($event)"
            :data="data"
            class="w-full"
          />
        </transition> -->
      </div>

      <div v-if="form == 'registry'" class="flex-grow">
        <transition name="slide" mode="out-in">
          <registry
            v-if="level == 1"
            @next-level="nextLevel($event)"
            class="w-full"
          />
        </transition>
        <transition name="slide" mode="out-in">
          <set-password
            v-if="level == 2"
            @next-level="nextLevel($event)"
            class="w-full"
          />
        </transition>
        <transition name="slide" mode="out-in">
          <phone
            v-if="level == 3"
            @next-level="nextLevel($event)"
            :data="data"
            class="w-full"
          />
        </transition>
        <transition name="slide" mode="out-in">
          <otp-code
            v-if="level == 4"
            @next-level="nextLevel($event)"
            :data="data"
            class="w-full"
          />
        </transition>
        <transition name="slide" mode="out-in">
          <initial-credit
            v-if="level == 5"
            @next-level="nextLevel($event)"
            class="w-full"
          />
        </transition>
      </div>
    </div>

    <Navigation>
      <div class="flex justify-around py-2 mb-4">
        <login-icon
          :fill="form == 'login' ? '#fe724e' : '#ccc'"
          class="w-12 mt-1"
          @click="handleClickNav('login')"
        />
        <registry-icon
          :fill="form == 'registry' ? '#fe724e' : '#ccc'"
          class="h-20 w-12 px-px -mb-px"
          @click="handleClickNav('registry')"
        />
      </div>
    </Navigation>
  </div>
</template>

<script>
import LoginIcon from "../components/icons/login-icon.vue";
import RegistryIcon from "../components/icons/registry-icon.vue";
import Header from "../components/Header.vue";
import InitialCredit from "../components/login/InitialCredit.vue";
import LoginForm from "../components/login/LoginForm.vue";
import OtpCode from "../components/login/OtpCode.vue";
import Phone from "../components/login/Phone.vue";
import Registry from "../components/login/Registry.vue";
import SetPassword from "../components/login/SetPassword.vue";
import Navigation from "../components/Navigation.vue";
// import ForgetPassword from '../components/login/ForgetPassword.vue';
// import ChangePassword from '../components/login/ChangePassword.vue';

export default {
  components: {
    Header,
    Navigation,
    Registry,
    SetPassword,
    Phone,
    OtpCode,
    InitialCredit,
    LoginForm,
    LoginIcon,
    RegistryIcon,
  },
  data() {
    return {
      level: 1,
      form: "login",
      loading: false,
      data: {"fatherName":"nothing"},
    };
  },
  methods: {
    nextLevel(data) {
      Object.assign(this.data, data);
      this.level += 1;
    },
    handleClickNav(item) {
      if (this.form != item) {
        this.level = 1;
        this.form = item;
      }
    },
  },
};
</script>

<style>
.slide-enter-active {
  transform: translateX(100%);
  transition: all 0.6s ease;
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

*::-webkit-scrollbar-thumb {
  width: 0px;
}
</style>