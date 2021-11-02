import pizzaApi from '@/api/pizzaApi'


const state = () => ({
    customer: {}
})
const actions = {
    async getCustomer({ commit }, id) {
        const getC = await pizzaApi.customer.getCustomerWithInfo(id);
        commit('getCustomer', getC);
    }
}
const mutations = {
    getCustomer(state, payload) {
        state.customer = payload.data;
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}