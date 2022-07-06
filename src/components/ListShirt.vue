<template>
<div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
      <ShirtCard :cardData="shirt" v-for="(shirt, i) in shirtList" :key="i" />
  </div>
</div>
</template>

<script lang="js">

import ShirtCard from "./ShirtCards.vue";

export default {
  name: 'src-components-cardVehiculo-card',
  components: {
    ShirtCard,
  },
  props: [],
  data() {
    return {
      
    }
  },
  computed: {
    shirtList: function() {
      return this.$store.state.shirts;
    }
  },
  mounted() {
    this.listShirts()
  },
  methods: {
    listShirts: function() {
      this.$store.dispatch("getShirts");
    }
  }
}
</script>
