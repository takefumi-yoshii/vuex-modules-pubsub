import {
  fromState,
  fromMutations,
  Injects,
  StateFactory
} from 'vuex-aggregate'

// ______________________________________________________
//
// @ State

const namespace = 'subscriber2'

interface State {
  name: string
  counterCount: number
  todosCount: number
}
const state = {
  name: '',
  counterCount: 0,
  todosCount: 0
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
  mapTodosCount(state: State, count: number): void {
    state.todosCount = count
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
  mapState
}
