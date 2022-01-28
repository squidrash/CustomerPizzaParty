import Vue from 'vue'
import Vuex from 'vuex'
//import MenuModule from './MenuModule'
//import CustomerModule from './CustomerModule'
import pizzaApi from '@/api/pizzaApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    menu: [],
    categories: [],
    specialOffers: [],
    customer: {}
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
    },

    async getMenu({ commit }) {
      const getM = await pizzaApi.menu.getMenu();
      commit('getMenu', getM);
    },
    async getOffers({ commit }) {
      const getO = await pizzaApi.specialOffer.getOffers();
      commit('getOffers', getO);
    },
    async getCategories({ commit }) {
      const getDC = await pizzaApi.dishCategories.getCategories();
      commit('getCategories', getDC);
    },

    async getCustomer({ commit }, id) {
      const getC = await pizzaApi.customer.getCustomerWithInfo(id);
      commit('getCustomer', getC);
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
    },

    getMenu(state, payload) {
      state.menu = payload.data;
    },
    getCategories(state, payload) {
      state.categories = payload.data;
    },
    getOffers(state, payload) {
      state.specialOffers = payload.data;
    },

    getCustomer(state, payload) {
      state.customer = payload.data;
    }

  },
  modules: {
  }
})
