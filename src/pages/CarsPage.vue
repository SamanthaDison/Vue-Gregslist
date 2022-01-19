<template>
  <h6>Hello World</h6>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { carsService } from "../services/CarsService";
import Pop from "../utils/Pop";
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
    return {};
  },
};
</script>

<style>
</style>