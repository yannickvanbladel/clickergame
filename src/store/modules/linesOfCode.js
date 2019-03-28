export const moduleLinesOfCode = {
  state: {
    amount: 0,
    max: 100,
    value: 0.2,
    clickModifier: 1
  },
  mutations: {
    addLines (state, n) {
      state.amount += n
    },
    removeLines (state, n) {
      state.amount -= n
    },
    setLines (state, n) {
      state.amount = n
    }
  },
  actions: {
    addLines ({ state, commit, rootState }) {
      if (state.amount < state.max) {
        commit('addLines', 1 * state.clickModifier)
        if (state.amount > rootState.commits.threshold) {
          commit('setCommitActive', true)
        }
      } else {
        commit('setLines', state.max)
      }
    },
    sellLines ({ state, commit }) {
      commit('removeLines', 1)
      commit('addMoney', state.value)
    },
    sellAllLines ({ state, commit }) {
      let amount = state.amount * state.value
      commit('setLines', 0)
      commit('addMoney', amount)
    }
  }
}
