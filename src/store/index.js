import Vue from 'vue'
import Vuex from 'vuex'
import MenuModule from './MenuModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  actions: {
    addToCartVX({ commit }, dish) {
      commit('addToCartVX', dish)
    }
  },
  mutations: {
    addToCartVX(state, dish) {
      state.cart.push(dish)
      console.log(state.cart[1])
      console.log(state.cart[0])
    }
  },
  modules: {
    menuM: MenuModule
  }
})
