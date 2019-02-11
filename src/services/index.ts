import { Store } from 'vuex'
import Subscriber1 from './modules/subscriber1'
import Subscriber2 from './modules/subscriber2'
export default function runService(store: Store<{}>) {
  Subscriber1(store)
  Subscriber2(store)
}
