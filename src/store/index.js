import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";
//import MenuModule from './MenuModule'
//import CustomerModule from './CustomerModule'
import pizzaApi from "@/api/pizzaApi";
import createPersistedState from "vuex-persistedstate";
import CartModule from "./CartModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    categories: [],
    specialOffers: [],
    customer: {},
    promocode: "",
    selectedAddress: null,
    deliveryAddress: 0,
  },
  getters: {
    getField,
  },
  actions: {
    setDeliveryAddress({ commit }, id) {
      commit("setDeliveryAddress", id);
    },
    setPromocode({ commit }, promocode) {
      commit("setPromocode", promocode);
    },

    async getMenu({ commit }) {
      const getM = await pizzaApi.menu.getMenu();
      commit("getMenu", getM);
    },
    async getOffers({ commit }) {
      const getO = await pizzaApi.specialOffer.getOffers();
      commit("getOffers", getO);
    },
    async getCategories({ commit }) {
      const getDC = await pizzaApi.dishCategories.getCategories();
      commit("getCategories", getDC);
    },

    async getCustomer({ commit }, id) {
      const getC = await pizzaApi.customer.getCustomerWithInfo(id);
      commit("getCustomer", getC);
    },

    async createOrderVX({ state }) {
      let order = {};
      order.dishes = state.cartM.cart;
      order.customerId = state.customer.id;
      order.promocode = state.promocode;
      order.addressId = state.deliveryAddress;
      const or = pizzaApi.order.createOrder(order);
      console.log(or);
    },
  },
  mutations: {
    updateField,

    setDeliveryAddress(state, id) {
      state.deliveryAddress = id;
    },
    setPromocode(state, promocode) {
      state.promocode = promocode;
      console.log("мутация setPromocode");
      console.log(state.promocode);
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
    },
  },
  modules: {
    cartM: CartModule,
  },
  plugins: [
    createPersistedState({
      paths: ["selectedAddress", "cartM.cart"],
    }),
  ],
});
