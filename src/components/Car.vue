<template>
  <router-link :to="{ name: 'CarDetails', params: { id: car.id } }">
    <div class="card">
      <div>
        <img :src="car.imgUrl" alt="" />
      </div>
      <div class="d-flex">
        <p>{{ car.year }}-</p>
        <p>{{ car.make }}-</p>
        <p>{{ car.model }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>