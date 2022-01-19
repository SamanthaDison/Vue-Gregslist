<template>
  <h6>Hello World</h6>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { carsService } from "../services/CarsService";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
export default {
  setup() {
    onMounted(async () => {
      try {
        await carsService.getAllCars();
      } catch (error) {
        logger.error(error);
        Pop.toast("Unable to retrieve cars", "error");
      }
    });
    return {
      cars: computed(() => AppState.cars),
    };
  },
};
</script>

<style>
</style>