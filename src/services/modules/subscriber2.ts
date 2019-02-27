import { Store } from 'vuex'
import * as Counter from '../../stores/modules/counter'
import * as Todos from '../../stores/modules/todos'
import * as Subscriber2 from '../../stores/modules/subscriber2'

export default function runService(store: Store<{}>) {
  store.subscribe(mutation => {
    if (mutation.type === Counter.mutationTypes.increment ||
        mutation.type === Counter.mutationTypes.decrement ||
        mutation.type === Counter.mutationTypes.setCount) {
      const count = Counter.getters.count()
      Subscriber2.commits.mapCounterCount(count)
    }
  })
  store.subscribe(mutation => {
    if (mutation.type === Todos.mutationTypes.doneTodo ||
        mutation.type === Todos.mutationTypes.addTodo) {
      const count = Todos.getters.todos().length
      Subscriber2.commits.mapTodosCount(count)
    }
  })
}