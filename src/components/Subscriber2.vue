<template>
  <div class="container">
    <h3>{{name}}</h3>
    <p>counterCount: {{counterCount}}</p>
    <p>todosCount: {{todosCount}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from '../stores/modules/subscriber2'

const computed = {
  ...mapState(['name', 'counterCount', 'todosCount'])
}

export default Vue.extend({ computed });
</script>

<style scoped>
.container {
  flex: 1 0 auto;
}
</style>
