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
    <div class="h-screen w-screen z-0 overflow-hidden">
      <div class="w-full h-full z-0">
        <l-map ref="mymap" :zoom="zoom"  @update:zoom="zoom = $event" :center="center" @move="centerUpdated">
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>

          <l-marker :lat-lng="markerPosition"> </l-marker>
        </l-map>
        <button @click="changeIcon">New kitten icon</button>
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
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";
import BackIcon from "../components/icons/back-icon.vue";
import GpsIcno from "../components/icons/gps-icno.vue";

export default {
  components: {
    Header,
    Navigation,
    BackIcon,
    GpsIcno,
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 16,
      center: [35.69966563941504, 51.337732261955814],
      markerPosition: [35.69966563941504, 51.337732261955814],
    };
  },
  methods: {
    centerUpdated() {
      this.markerPosition = this.$refs.mymap.leafletObject.getCenter();
    },
    locateMe() {
      const isSupported = "navigator" in window && "geolocation" in navigator;
      if (isSupported) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = [position.coords.latitude, position.coords.longitude];
          this.$refs.mymap.leafletObject.setView(this.center, this.zoom)
        });
      }
    },
  },
};
</script>

<style>
</style>