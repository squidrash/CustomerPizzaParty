
const state = () => ({
   cart: []
})
const actions = {
   addToCartVX({ commit }, dish) {
      commit('addToCartVX', dish)
   },
   removeDishVX({ commit }, id) {
      commit('removeDishVX', id)
   },
   emptyCartVX({ commit }) {
      commit('emptyCartVX')
   },
}
const mutations = {
   addToCartVX(state, dish) {
      state.cart.push(dish)
      console.log(state.cart)
   },
   removeDishVX(state, id) {
      state.cart.forEach(function(el,i)
      {
         if(el.id == id) state.cart.splice(i, 1)
      })
      console.log(state.cart)
   },
   emptyCartVX(state) {
      state.cart = []
   },
}
export default {
   namespaced: true,
   state,
   actions,
   mutations
}