<template>
  <div id="app">
    <h1>Upstream</h1>
    <div class="upstream">
      <Counter />
      <Todos />
    </div>
    <hr />
    <Subscriber1 />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Counter from "./components/Counter.vue";
import Todos from "./components/Todos.vue";
import Subscriber1 from "./components/Subscriber1.vue";

export default Vue.extend({
  name: "app",
  components: {
    Counter,
    Todos,
    Subscriber1
  }
});
</script>

<style scoped>
.upstream {
  display: flex;
  justify-content: space-between;
}
</style>

