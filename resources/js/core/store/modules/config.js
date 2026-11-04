import http from '../../http';

const state = () => ({
    initURL: '/config',
    initAppURL: '/app/config',
    auth: {},
    system: {},
    general: {},
    module: [],
    trans: {},
    isLoaded: false,
    formErrors: {},
});

const mutations = {
    SET_CONFIG(state, config) {
        state.auth = config.auth || {};
        state.system = config.system || {};
        state.general = config.general || {};
        state.module = config.module || [];
        state.trans = config.trans || {};
        state.isLoaded = true;
    },
    SET_LOADED(state, loaded) {
        state.isLoaded = loaded;
    },
    SET_FORM_ERRORS(state, errors) {
        state.formErrors = errors || {};
    },
};

const actions = {
    async index({ state, commit }, config = {}) {
        const res = await http.get(state.initURL, config);
        commit('SET_CONFIG', res.data);
        return res.data;
    },
    async preRequisite({ state }) {
        const res = await http.get('/config/pre-requisite');
        return res.data;
    },
    resetState({ commit }) {
        commit('SET_LOADED', false);
    },
};

const getters = {
    config: (state) => (path) => path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), state),
    configs: (state) => state,
};

export default { namespaced: true, state, mutations, actions, getters };
