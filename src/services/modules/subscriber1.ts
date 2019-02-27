import { Store } from 'vuex'
import * as Counter from '../../stores/modules/counter'
import * as Todos from '../../stores/modules/todos'
import * as Subscriber1 from '../../stores/modules/subscriber1'

export default function runService(store: Store<{}>) {
  store.subscribe(mutation => {
    if (mutation.type === Counter.mutationTypes.increment ||
        mutation.type === Counter.mutationTypes.decrement ||
        mutation.type === Counter.mutationTypes.setCount) {
      const mappingCount = Counter.getters.count()
      Subscriber1.commits.mapCounterCount(mappingCount)
    }
  })
  store.subscribe(mutation => {
    if (mutation.type === Todos.mutationTypes.doneTodo ||
        mutation.type === Todos.mutationTypes.addTodo) {
      const done = Todos.getters.doneAll()
      Subscriber1.commits.mapTodosDone(done)
    }
  })
}
