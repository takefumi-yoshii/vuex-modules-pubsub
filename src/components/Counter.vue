<template>
  <div class="counter">
    <h3>{{name}}</h3>
    <p>count: {{count}}</p>
    <div>
      <button @click="increment()">+1</button>
      <button @click="decrement()">-1</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from '../stores/modules/counter'

const computed = {
  ...mapState(['name', 'count'])
}
const methods = {
  ...mapMutations([
    'increment',
    'decrement',
    'setCount'
  ])
}

export default Vue.extend({ computed, methods });
</script>

<style scoped>
.counter {
  flex: 1 0 auto;
  margin-right: 12px;
  border-right: 1px solid #666;
}
</style>
