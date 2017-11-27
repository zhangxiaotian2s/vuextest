import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add(state, num) {
    state.count += num;
  },
  reduce(state, num) {
    state.count -= num;
  }
}
const actions = {
  addAction(store, num) {
    store.commit('add', num)
  }
}
const getters = {
  count(state) {
    return state.count
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
