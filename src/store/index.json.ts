import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 0
  },
  getters: {
    contador: (state) => state.contador
  },
  mutations: {
    incrementar(state, delta: number) {
      state.contador += Number(delta)
    },
  },
  actions: {
    incrementar(context, delta: number) {
      context.commit('incrementar', delta)
    },

    decrementar(context, delta: number) {
      context.commit('incrementar', -delta)
    },
  }
})
