import pizzaApi from '@/api/pizzaApi'
import { getField, updateField } from 'vuex-map-fields';

const state = () => ({
    menu: []
})
const actions = {
    async getMenu({ commit }) {
        const getM = await pizzaApi.menu.getMenu();
        commit('getMenu', getM);
    }
}
const getters = {
    getField
}
const mutations = {
    updateField,
    getMenu(state, payload) {
        state.menu = payload.data;
    }
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}