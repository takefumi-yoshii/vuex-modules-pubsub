import Vue from 'vue'
import Vuex from 'vuex'
import * as VuexAggregate from 'vuex-aggregate'
import * as Counter from './modules/counter'
import * as Todos from './modules/todos'
import * as Subscriber1 from './modules/subscriber1'
import * as Subscriber2 from './modules/subscriber2'

// ______________________________________________________

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    [Counter.namespace]: Counter.moduleFactory({ name: 'COUNTER' }),
    [Todos.namespace]: Todos.moduleFactory({ name: 'TODOS' }),
    [Subscriber1.namespace]: Subscriber1.moduleFactory({ name: 'SUBSCRIBER_1' }),
    [Subscriber2.namespace]: Subscriber2.moduleFactory({ name: 'SUBSCRIBER_2' })
  }
})

VuexAggregate.use(store)

export default store

