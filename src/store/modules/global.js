export const moduleGlobal = {
  state: {
    money: 0
  },
  mutations: {
    addMoney (state, n) {
      state.money += n
    },
    removeMoney (state, n) {
      state.money -= n
    }
  },
  actions: {}
}
