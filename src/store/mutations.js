// root state object.
// each Vuex instance is just a single state tree.
export const state = {
  commits: 0,
  maxCommits: 100,
  push: 0,
  money: 0,
  modifier: 1,
  jrDev: 0
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
export const mutations = {
  addCommitJrDev (state, n) {
    state.commits += n
  },
  addPush (state, n) {
    state.push += n
  },
  removePush (state, n) {
    state.push -= n
  },
  addJrDev (state, n) {
    state.jrDev += n
  },
  setModifier (state, n) {
    state.modifier = n
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
export const actions = {

  addCommitJrDev ({ commit }) {
    let i
    for (i = 0; i < state.jrDev; i++) {
      if (state.commits < state.maxCommits) {
        commit('addCommitJrDev', 1)
      }
    }
  },
  addModifier ({ commit, state }) {
    let n = state.modifier + 0.2
    commit('setModifier', n)
  },
  addPush ({ commit, state }) {
    if (state.commits >= 100) {
      commit('setCommit', state.commits - 100)
      commit('addPush', 1)
    }
  },
  sellPush ({ commit }) {
    commit('removePush', 1)
    commit('addMoney', 120)
  },
  addJrDev ({commit, state}) {
    if (state.money >= 100) {
      commit('removeMoney', 100)
      commit('addJrDev', 1)
    }
  }
}
