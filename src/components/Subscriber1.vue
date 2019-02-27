<template>
  <div class="container">
    <h3>{{name}}</h3>
    <p>counterCount: {{counterCount}}</p>
    <p v-if="doneTodos">todos done!</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from '../stores/modules/subscriber1'

const computed = {
  ...mapState(['name', 'counterCount', 'doneTodos'])
}

export default Vue.extend({ computed });
</script>

<style scoped>
.container {
  flex: 1 0 auto;
}
</style>
