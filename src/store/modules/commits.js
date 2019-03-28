export const moduleCommits = {
  state: {
    active: false,
    amount: 0,
    threshold: 20,
    cost: 4,
    max: 100,
    value: 1,
    clickModifier: 1
  },
  mutations: {
    addCommit (state, n) {
      state.amount += n
    },
    removeCommit (state, n) {
      state.amount -= n
    },
    setCommit (state, n) {
      state.amount = n
    },
    setCommitActive (state, b) {
      state.active = b
    }
  },
  actions: {
    addCommit ({ state, commit, rootState }) {
      if (state.amount < state.max) {
        if (rootState.linesOfCode.amount >= state.cost) {
          commit('setLines', rootState.linesOfCode.amount - state.cost)
          commit('addCommit', 1 * state.clickModifier)
        }
      } else {
        commit('setCommit', state.max)
      }
    },
    sellCommit ({ state, commit }) {
      commit('removeCommit', 1)
      commit('addMoney', state.value)
    },
    sellAllCommit ({ state, commit }) {
      let amount = state.amount * state.value
      commit('setCommit', 0)
      commit('addMoney', amount)
    }
  }
}
