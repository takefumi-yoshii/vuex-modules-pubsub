import {
  fromState,
  fromMutations,
  fromGetters,
  Injects,
  StateFactory
} from 'vuex-aggregate'

// ______________________________________________________
//
// @ State

const namespace = 'counter'

interface State {
  name: string
  count: number
  unit: string
}
const state = {
  name: '',
  count: 0,
  unit: 'pt'
}
const stateFactory: StateFactory<State> = injects => ({ ...state, ...injects })
const { mapState } = fromState(state, namespace)

// ______________________________________________________
//
// @ Getters

const _getters = {
  count(state: State): number {
    return state.count
  },
  expo(state: State): (amount: number) => number {
    return amount => {
      return state.count ** amount
    }
  },
  double(state: State): number {
    return state.count * 2
  }
}
const { getters, mapGetters } = fromGetters(_getters, namespace)

// ______________________________________________________
//
// @ Mutations

const mutations = {
  increment(state: State): void {
    state.count++
  },
  decrement(state: State): void {
    state.count--
  },
  setCount(state: State, count: number): void {
    state.count = count
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
  mapMutations
}
