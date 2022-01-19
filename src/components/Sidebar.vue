<template>
  <div class="selectable">
    <router-link :to="{ name: 'Cars' }"> Cars </router-link>
  </div>
  <div class="selectable">Jobs</div>
  <div class="selectable">Houses</div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
</style>