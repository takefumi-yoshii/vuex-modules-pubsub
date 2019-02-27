import {
  fromState,
  fromMutations,
  Injects,
  StateFactory
} from 'vuex-aggregate'

// ______________________________________________________
//
// @ State

const namespace = 'subscriber1'

interface State {
  name: string
  counterCount: number
  doneTodos: boolean
}
const state = {
  name: '',
  counterCount: 0,
  doneTodos: false
}
const stateFactory: StateFactory<State> = injects => ({ ...state, ...injects })
const { mapState } = fromState(state, namespace)
// ______________________________________________________
//
// @ Mutations

const mutations = {
  mapCounterCount(state: State, count: number): void {
    state.counterCount = count
  },
  mapTodosDone(state: State, done: boolean): void {
    state.doneTodos = done
  }
}
const { commits } = fromMutations(
  mutations,
  namespace
)
// ______________________________________________________
//
// @ ModuleFactory

const moduleFactory = (injects?: Injects<State>) => ({
  namespaced: true, // Required
  state: stateFactory(injects),
  mutations
})

export {
  State,
  namespace,
  moduleFactory,
  commits,
  mapState,
}
