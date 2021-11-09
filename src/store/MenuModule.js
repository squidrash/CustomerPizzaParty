import pizzaApi from '@/api/pizzaApi'

const state = () => ({
    menu: []
})
const actions = {
    async getMenu({ commit }) {
        const getM = await pizzaApi.menu.getMenu();
        commit('getMenu', getM);
    }
}
const mutations = {
    getMenu(state, payload) {
        state.menu = payload.data;
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}