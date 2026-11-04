import http from '../../http';

/** general — fetches module-agnostic pre-requisites: general/preRequisite({ url: 'employee/...' }) */
export default {
    namespaced: true,
    modules: {},
    state: () => ({ formErrors: {} }),
    mutations: {
        SET_FORM_ERRORS(state, errors) {
            state.formErrors = errors || {};
        },
    },
    actions: {
        async preRequisite({ commit }, { url, params = {} } = {}) {
            try {
                const res = await http.get('app/' + url, { params });
                commit('SET_FORM_ERRORS', {});
                return res;
            } catch (error) {
                throw error;
            }
        },
    },
    getters: {},
};
