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
    },
    removeDishVX({ commit }, id) {
      commit('removeDishVX', id)
    },
    emptyCartVX({ commit }) {
      commit('emptyCartVX')
    }
  },
  mutations: {
    addToCartVX(state, dish) {
      state.cart.push(dish)
      console.log(state.cart)
    },
    removeDishVX(state, id) {
      state.cart.splice(id, 1)
      console.log(state.cart)
    },
    emptyCartVX(state) {
      state.cart = []
    }
  },
  modules: {
    menuM: MenuModule
  }
})
