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
  mappedCount: number
}
const state = {
  name: '',
  mappedCount: 0,
}
const stateFactory: StateFactory<State> = injects => ({ ...state, ...injects })
const { mapState } = fromState(state, namespace)
// ______________________________________________________
//
// @ Mutations

const mutations = {
  mapCount(state: State, count: number): void {
    state.mappedCount = count
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
