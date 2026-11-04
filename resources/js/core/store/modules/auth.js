import http from '../../http';

const state = () => ({
    user: {},
    token: '',
    isTokenValid: false,
    abilities: [],
    roles: [],
    permissions: [],
    loaded: false,
});

const mutations = {
    SET_USER(state, user) {
        state.user = user || {};
        state.roles = (user && user.roles) || [];
        state.permissions = (user && user.permissions) || [];
        state.loaded = true;
    },
    SET_TOKEN(state, token) {
        state.token = token || '';
    },
    SET_TOKEN_VALID(state, valid) {
        state.isTokenValid = !!valid;
    },
    RESET(state) {
        state.user = {};
        state.token = '';
        state.isTokenValid = false;
        state.loaded = false;
    },
};

const actions = {
    async login({ commit }, form) {
        const res = await http.post('/auth/login', form);
        commit('SET_TOKEN', res.data.token);
        commit('SET_TOKEN_VALID', true);
        return res.data;
    },
    async logout({ commit }) {
        try {
            await http.post('/auth/logout');
        } finally {
            commit('RESET');
        }
    },
    async user({ commit }) {
        const res = await http.get('/auth/user');
        commit('SET_USER', res.data.user || res.data);
        commit('SET_TOKEN_VALID', true);
        return res.data;
    },
    resetState({ commit }) {
        commit('RESET');
    },
};

const getters = {
    isSuperAdmin: (state) => !!(state.user && state.user.is_super_admin),
    hasAnyRole: (state) => (roles = []) => roles.some((r) => (state.roles || []).includes(r)),
    hasAnyPermission: (state) => (permissions = []) =>
        !permissions.length || permissions.some((p) => (state.permissions || []).includes(p)),
    hasAllPermissions: (state) => (permissions = []) =>
        permissions.every((p) => (state.permissions || []).includes(p)),
};

export default { namespaced: true, state, mutations, actions, getters };
