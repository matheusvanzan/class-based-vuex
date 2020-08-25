import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators' 



@Module({ })
export class ContadorStore extends VuexModule {
  _contador = 0

  get contador() {
    return this._contador
  }

  @Mutation
  _incrementar(delta: number) {
    this._contador += Number(delta)
  }

  @Action({commit: '_incrementar'})
  incrementar(delta: number) {
    return delta
  }

  @Action
  decrementar(delta: number) {
    this.context.commit('_incrementar', -delta)
  }
}

export default new Vuex.Store({
  modules: {
    ContadorStore
  }
})


// export default new Vuex.Store({
//   state: {
//     contador: 0
//   },
//   getters: {
//     contador: (state) => state.contador
//   },
//   mutations: {
//     incrementar(state, delta: number) {
//       state.contador += Number(delta)
//     },
//   },
//   actions: {
//     incrementar(context, delta: number) {
//       context.commit('incrementar', delta)
//     },

//     decrementar(context, delta: number) {
//       context.commit('incrementar', -delta)
//     },
//   }
// })
