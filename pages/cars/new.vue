<template>
    <car-form></car-form>
</template>

<script>
  import CarForm from '~/components/CarForm';
  export default {
    components: {CarForm},
    fetch({store}) {
      store.commit('car/setCar', {})
    }
  }
</script>