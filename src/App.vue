<template>
  <div id="app">
    <h1>Up Stream</h1>
    <div class="upstream">
      <Counter />
      <Todos />
    </div>
    <hr />
    <h1>Down Stream</h1>
    <div class="downstream">
      <Subscriber1 />
      <Subscriber2 />
   </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Counter from "./components/Counter.vue";
import Todos from "./components/Todos.vue";
import Subscriber1 from "./components/Subscriber1.vue";
import Subscriber2 from "./components/Subscriber2.vue";

export default Vue.extend({
  name: "app",
  components: {
    Counter,
    Todos,
    Subscriber1,
    Subscriber2
  }
});
</script>

<style scoped>
.upstream, .downstream {
  display: flex;
  justify-content: space-between;
}
</style>

