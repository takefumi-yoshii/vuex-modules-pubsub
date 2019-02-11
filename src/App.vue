<template>
  <div id="app">
    <Counter />
    <hr />
    <Subscriber1 />
    <hr />
    <Subscriber2 />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Counter from "./components/Counter.vue";
import Subscriber1 from "./components/Subscriber1.vue";
import Subscriber2 from "./components/Subscriber2.vue";

export default Vue.extend({
  name: "app",
  components: {
    Counter,
    Subscriber1,
    Subscriber2
  }
});
</script>

