<template>
  <div
    class="next-btn bg-orange mt-auto"
    :class="{ 'opacity-80': loading }"
  >
    <i
      v-if="!loading"
      class="bi bi-chevron-right m-auto pt-2 pl-px text-white text-3xl stroke"
    ></i>
    <div
      v-else
      class="ease-linear rounded-full border-2 h-8 w-8 m-auto loader"
    ></div>
  </div>
</template>
<script>
export default {
  props: ["loading"],
};
</script>

<style scoped>
.next-btn {
  width: 72px;
  height: 72px;
  @apply shadow border rounded-full text-center items-center flex;
}


</style>