<template>
  <car-form></car-form>
</template>

<script>
  import CarForm from "~/components/CarForm";
  export default {
    name: "editCar",
    components: {CarForm},
    async fetch({store, params}) {
      await store.dispatch('car/show', {car_id: params.car_id});
    }
  }
</script>