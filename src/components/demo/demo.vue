<template>
  <div id="root">
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "demo",
  computed: {
    ...mapGetters([
      'originalPrice',
      'doublePrice',
      'triplePrice'
    ]),

    // originalPrice() {
    //   return this.$store.getters.originalPrice
    // },
    // doublePrice(state) {
    //   return this.$store.getters.doublePrice
    // },
    // triplePrice(state) {
    //   return this.$store.getters.triplePrice
    // }
  },
}
</script>

<style scoped>

</style>