<template>
  <div class="w-screen h-screen overflow-x-hidden">
    <!-- <login v-if="false"  />
    <services v-if="false" />
    <my-location />
    <submit-request v-if="false" />
    <request-services v-if="false" />
    <server-info v-if="false" />
    <server-waiting v-if="false" />
    <cancel-service v-if="false" />
    <side-bar v-if="false" />
    <account-credit v-if="false"/>
    <profile v-if="false" />
    <services-history v-if="false"/> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {

  },
  created(){
    // if(localStorage.getItem("accessToken")){
      
    //   console.log(localStorage.getItem("accessToken"))
    // }else{
    //   //this.$router.push("login") 
    //   this.$router.push("location") 
    // }
  },
  provide:{
    userBaseUrl : 'http://37.152.186.99:8004/UAA/api/users',
    categoryBaseUrl : 'http://37.152.186.99:8004/Core/api/categories',
    paymentBaseUrl : 'http://37.152.186.99:8004/Payment/api/wallets'

  }
};
</script>

<style>

</style>