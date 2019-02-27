<template>
  <div class="todos">
    <h3>{{name}}</h3>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" v-model="inputValue" />
      <button>add Todo</button>
    </form>
    <hr />
    <div>
      toggle visible done todos: <input type="checkbox" v-model="visibleDoneTodos" />
    </div>
    <ul class="list">
      <TodoComponent
        v-for="todo in todos"
        v-bind:key="todo.id"
        :data="todo"
       />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as Todos from '../stores/modules/todos'
import TodoComponent from './Todo.vue'

interface Data {
  inputValue: string
  visibleDoneTodos: boolean
}
export default Vue.extend({
  data: (): Data => ({
    inputValue: '',
    visibleDoneTodos: true
  }),
  computed: {
    name(): string {
      return Todos.getters.name()
    },
    todos(): Todos.Todo[] {
      return this.visibleDoneTodos ? Todos.getters.todos() : Todos.getters.doneTodos()
    }
  },
  methods: {
    addTodo() {
      Todos.commits.addTodo(this.inputValue)
    },
    onSubmit() {
      this.addTodo()
    }
  },
  components: {
    TodoComponent
  }
});
</script>

<style scoped>
.list {
  padding: 0;
}
.todos {
  flex: 1 0 auto;
}
</style>
