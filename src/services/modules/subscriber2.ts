import { Store } from 'vuex'
import * as Counter from '../../stores/modules/counter'
import * as Subscriber2 from '../../stores/modules/subscriber2'

export default function runService(store: Store<{}>) {
  store.subscribe(mutation => {
    if (mutation.type === Counter.mutationTypes.increment ||
        mutation.type === Counter.mutationTypes.decrement ||
        mutation.type === Counter.mutationTypes.setCount) {
      const mappedCount = Counter.getters.expo(2)
      Subscriber2.commits.mapCount(mappedCount)
    }
  })
}
