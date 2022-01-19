<template>
  <h6>Hello World</h6>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { carsService } from "../services/CarsService";
import { AppState } from "../AppState";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      await carsService.getCarById(route.params.id);
    });
    return {
      car: computed(() => AppState.activeCar),
    };
  },
};
</script>

<style>
</style>