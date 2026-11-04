const state = () => ({
    sidebarOpen: true,
    mobileSidebarOpen: false,
    fullWidth: false,
});

const mutations = {
    TOGGLE_SIDEBAR(state) {
        state.sidebarOpen = !state.sidebarOpen;
    },
    SET_MOBILE_SIDEBAR(state, open) {
        state.mobileSidebarOpen = open;
    },
    SET_FULL_WIDTH(state, value) {
        state.fullWidth = value;
    },
};

const actions = {
    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR');
    },
};

export default { namespaced: true, state, mutations, actions, getters: {} };
