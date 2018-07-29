<template>
  <div>
    <h3>{{$store.state.cars.car.title}}</h3>
  </div>
</template>

<script>
  export default {
    name: "showCar",
    async fetch({store, params}) {
      await store.dispatch('car/show', {car_id: params.car_id});
    }
  }
</script>

<style scoped>

</style>