import http from '../../http';

export default {
    namespaced: true,
    modules: {},
    state: () => ({ initURL: '/app/setup', step: 1, form: {}, formErrors: {}, loading: false }),
    mutations: {
        SET_STEP(state, step) {
            state.step = step;
        },
        SET_FORM(state, form) {
            state.form = form;
        },
        SET_FORM_ERRORS(state, errors) {
            state.formErrors = errors || {};
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
    },
    actions: {
        async install({ state, commit }) {
            const res = await http.post('/app/setup', state.form);
            commit('SET_FORM_ERRORS', {});
            return res.data;
        },
        async preRequisite() {
            const res = await http.get('/app/setup/pre-requisite');
            return res.data;
        },
        resetState({ commit }) {
            commit('SET_LOADING', false);
        },
    },
    getters: {},
};
