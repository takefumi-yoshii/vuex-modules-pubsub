<template>
  <li
    class="todo"
    v-bind:class="{ done: data.done }"
    v-on:click="toggleDone"
   >
    <span class="createdAt">{{createdAt}}</span>
    <span>{{task}}</span>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import * as Todos from '../stores/modules/todos'

export default Vue.extend({
  props: {
    data: Object as () => Todos.Todo
  },
  computed: {
    task(): string {
      return this.data.task
    },
    createdAt(): string {
      const date = this.data.createdAt
      const day = `${date.getMonth() + 1}/${date.getDate()}`
      const time = ` ${date.getHours()}:${date.getMinutes()}`
      return `${day} ${time}`
    }
  },
  methods: {
    toggleDone() {
      Todos.commits.doneTodo(this.data.id)
    }
  }
});
</script>

<style scoped>
.todo {
  list-style: none;
}
.todo.done {
  opacity: .5;
}
.createdAt {
  display: inline-block;
  margin-right: 12px;
  padding: 4px;
  font-size: 12px;
  color: #fff;
  background-color: #333;
}
</style>