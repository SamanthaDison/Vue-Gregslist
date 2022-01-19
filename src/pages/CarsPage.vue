<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">CARS</div>
      <div class="col-12">
        <div class="row">
          <div class="col-4" v-for="cData in cars" :key="cData.id">
            <Car :car="cData" />
          </div>
        </div>
      </div>
    </div>
  </div>
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