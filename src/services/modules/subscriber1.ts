import { Store } from 'vuex'
import * as Counter from '../../stores/modules/counter'
import * as Subscriber1 from '../../stores/modules/subscriber1'

export default function runService(store: Store<{}>) {
  store.subscribe(mutation => {
    if (mutation.type === Counter.mutationTypes.increment ||
        mutation.type === Counter.mutationTypes.decrement ||
        mutation.type === Counter.mutationTypes.setCount) {
      const mappedCount = Counter.getters.double()
      Subscriber1.commits.mapCount(mappedCount)
    }
  })
}
