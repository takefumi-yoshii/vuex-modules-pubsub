import {
  fromState,
  fromMutations,
  fromGetters,
  Injects,
  StateFactory
} from 'vuex-aggregate'
import uuid from 'uuid/v4'

// ______________________________________________________
//
// @ State

const namespace = 'todos'

interface Todo {
  id: string
  task: string
  done: boolean
  createdAt: Date
}
interface State {
  name: string
  todos: Todo[]
}
const state = {
  name: '',
  todos: []
}
const stateFactory: StateFactory<State> = injects => ({ ...state, ...injects })
const { mapState } = fromState(state, namespace)

// ______________________________________________________
//
// @ Getters

const _getters = {
  name(state: State): string {
    return state.name
  },
  todos(state: State): Todo[] {
    return state.todos
  },
  doneTodos(state: State): Todo[] {
    return state.todos.filter(todo => !todo.done)
  },
  doneCount(state: State): number {
    return state.todos.length
  },
  doneAll(state: State): boolean {
    return state.todos.filter(todo => !todo.done).length === 0
  }
}
const { getters, mapGetters } = fromGetters(_getters, namespace)

// ______________________________________________________
//
// @ Mutations

const mutations = {
  addTodo(state: State, task: string) {
    state.todos.push({
      id: uuid(),
      task,
      done: false,
      createdAt: new Date()
    })
  },
  doneTodo(state: State, id: string) {
    state.todos = state.todos.map(todo => {
      if (todo.id !== id) return todo
      return { ...todo, done: true }
    })
  }
}
const { commits, mutationTypes, mapMutations } = fromMutations(
  mutations,
  namespace
)
// ______________________________________________________
//
// @ ModuleFactory

const moduleFactory = (injects?: Injects<State>) => ({
  namespaced: true, // Required
  state: stateFactory(injects),
  getters: _getters,
  mutations,
})

export {
  State,
  namespace,
  moduleFactory,
  mutationTypes,
  commits,
  mapState,
  getters,
  mapGetters,
  mapMutations,
  Todo
}
