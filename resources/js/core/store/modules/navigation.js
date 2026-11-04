const state = () => ({ navigations: [], configNavigations: [] });

const mutations = {
    SET_NAVIGATION(state, { navigations = [], configNavigations = [] }) {
        state.navigations = navigations;
        state.configNavigations = configNavigations;
    },
    RESET_NAVIGATION(state) {
        state.navigations = [];
        state.configNavigations = [];
    },
};

function titleize(name) {
    return (name || '')
        .replace(/\./g, ' ')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(/\s/g, '');
}

function filterRoutes(routes, navMeta) {
    return routes
        .filter((route) => {
            if (route.meta && route.meta.isNotNav === true) return false;
            const meta = navMeta.find((n) => n.name === route.name || n.name + 'List' === route.name || n.name + 'Index' === route.name);
            if (meta && !meta.visibility) return false;
            if (!route.meta) return true;
            if (route.meta.isNotNav) return false;
            return true;
        })
        .map((route) => {
            const meta = navMeta.find((n) => n.name === route.name || n.name + 'List' === route.name || n.name + 'Index' === route.name) || {};
            const next = { ...route, visibility: meta.visibility, position: meta.position || 0 };
            if (route.children && route.children.length) {
                next.children = filterRoutes(route.children, navMeta);
            }
            return next;
        })
        .sort((a, b) => {
            const ma = navMeta.find((n) => n.name === a.name || n.name + 'List' === a.name || n.name + 'Index' === a.name);
            const mb = navMeta.find((n) => n.name === b.name || n.name + 'List' === b.name || n.name + 'Index' === b.name);
            if (!ma || !mb) return 0;
            return (ma.position || 0) - (mb.position || 0);
        });
}

const actions = {
    setNavigation({ commit, rootGetters }, { routes = [] }) {
        const modules = (rootGetters['config/configs'].module || []).slice().sort((a, b) => a.position - b.position);
        const navMeta = [];
        const collect = (list) => list.forEach((n) => {
            navMeta.push({ name: titleize(n.name), visibility: n.visibility, position: n.position || 0 });
            n.children && collect(n.children);
        });
        collect(modules);
        commit('SET_NAVIGATION', { navigations: filterRoutes(routes, navMeta), configNavigations: [] });
    },
    resetNavigation({ commit }) {
        commit('RESET_NAVIGATION');
    },
};

const getters = {
    navigations: (state) => state.navigations,
    configNavigations: (state) => state.configNavigations,
};

export default { namespaced: true, state, mutations, actions, getters };
