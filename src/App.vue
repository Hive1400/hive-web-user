<template>
  <div class="w-screen h-screen overflow-x-hidden select-none">
    <router-view></router-view>
  </div>
</template>

<script>
// import VueSocketIO from "vue-3-socket.io";
// import SocketIO from "socket.io-client";

export default {
  components: {},
  created() {
    if(localStorage.getItem("accessToken")){
      this.$router.push("/")
      console.log(localStorage.getItem("accessToken"))
    }else{
      this.$router.push("login")
    }

    
    // const self = this;
    // const options = { path: "/my-app/" }; //Options object to pass into SocketIO
    // const vueSocketIO = new VueSocketIO({
    //   debug: true,
    //   connection: SocketIO("http://185.231.181.115:8007", options),
    //   vuex: {
    //     store: self.$store,
    //     actionPrefix: "SOCKET_",
    //     mutationPrefix: "SOCKET_",
    //   },
    // });
    // this.use(vueSocketIO);
    // this.$socket.emit("emit_method", "data");
  },
  provide: {
    userBaseUrl: "http://185.231.181.115:8004/UAA/api/users",
    categoryBaseUrl: "http://185.231.181.115:8004/Core/api/categories",
    paymentBaseUrl: "http://185.231.181.115:8004/Payment/api/wallets",
  },
};
</script>

<style>
</style>