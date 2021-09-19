<template>
  <div class="absolute h-screen w-screen flex-col flex">
    <Header class="fixed">
      <div class="flex justify-around pt-8 px-8 pb-6 h-20 items-center">
        <div class="flex flex-grow justify-center items-center mr-8">
          <i class="bi bi-geo-alt-fill text-white text-3xl"></i>
          <p class="text-white text-xl font-bold px-4">ثبت موقعیت شما</p>
        </div>
        <back-icon :fill="'#fff'" class="w-8" @click="$router.go(-1)" />
      </div>
    </Header>
    <div class="h-screen w-screen z-0">
      <div ref="mapDiv" class="w-full h-full"></div>
      <div
        ref="marker"
        class="w-12 h-24 pb-12 fixed m-auto top-0 left-0 bottom-0 right-0"
      >
        <svg
          height="100%"
          viewBox="-78 0 511 512"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m178.46875 0c-98.132812 0-177.96875 79.835938-177.96875 177.96875 0 123.339844 177.96875 334.03125 177.96875 334.03125s177.96875-216.757812 177.96875-334.03125c0-98.132812-79.835938-177.96875-177.96875-177.96875zm0 0"
            fill="#fe724e"
          />
          <path
            d="m178.46875 0v512s177.96875-216.757812 177.96875-334.03125c0-98.132812-79.835938-177.96875-177.96875-177.96875zm0 0"
            fill="#fe724e"
          />
          <path
            d="m232.164062 230.078125c-14.804687 14.804687-34.25 22.207031-53.695312 22.207031s-38.894531-7.402344-53.695312-22.207031c-29.609376-29.605469-29.609376-77.78125 0-107.390625 14.339843-14.34375 33.410156-22.242188 53.695312-22.242188s39.351562 7.902344 53.695312 22.242188c29.609376 29.609375 29.609376 77.785156 0 107.390625zm0 0"
            fill="#fff"
          />
          <path
            d="m232.164062 122.6875c-14.34375-14.34375-33.410156-22.242188-53.695312-22.242188v151.839844c19.445312 0 38.890625-7.402344 53.695312-22.207031 29.609376-29.605469 29.609376-77.78125 0-107.390625zm0 0"
            fill="#fff"
          />
        </svg>
      </div>
    </div>

    <gps-icno @click="locateMe" />

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
            ثبت موقعیت
          </p>
        </div>
      </div>
    </navigation>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";
import BackIcon from "../components/icons/back-icon.vue";
import { Loader } from "@googlemaps/js-api-loader";
import GpsIcno from "../components/icons/gps-icno.vue";

export default {
  components: {
    Header,
    Navigation,
    BackIcon,
    GpsIcno,
  },
  data() {
    return {
      center: { lat: 35.69966563941504, lng: 51.337732261955814 },
      map: null,
    };
  },
  methods: {
    locateMe() {
      const isSupported = "navigator" in window && "geolocation" in navigator;
      if (isSupported) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.map.setCenter(this.center);
          this.map.setZoom(18);
        });
      }
    },
  },
  created() {
    document.body.style.overflow = "hidden";

    const loader = new Loader({
      apiKey: "7d3a483094a09645",
    });
    loader.load().then(() => {
  
      this.map = new window.google.maps.Map(this.$refs.mapDiv, {
        center: this.center,
        zoom: 16,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapTypeId: "roadmap",
        
      });
      // const marker = new window.google.maps.Marker({
      //   map: this.map,

      //   position: {
      //     lat: this.map.getCenter().lat(),
      //     lng: this.map.getCenter().lng(),
      //   },
      // });

      this.map.addListener("center_changed", () => {
        this.center = {
          lat: this.map.getCenter().lat(),
          lng: this.map.getCenter().lng(),
        };
        //marker.setPosition(this.center);
      });
    });

    //setTimeout(()=>{document.html.scrollTo(0,1000);},1000)
  },
  mounted() {},
  unmounted() {
    //document.body.style.overflow = "auto";
  },
};
</script>

<style>
</style>