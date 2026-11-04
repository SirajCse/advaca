import http from './http';
import { getErrorMessage } from './http';

/**
 * Shared Vuex CRUD module factory — the original build spreads one shared
 * state/mutations/actions/getters object into every module; each module only
 * overrides `initURL` and (optionally) appends custom actions.
 *
 * state:  { initURL, list, listMeta, form, formErrors, loading }
 * actions:list/index, show, store, update, destroy, preRequisite, resetFormErrors, resetState
 */
export function makeModule(initURL, { extraState = {}, extraActions = {}, extraGetters = {}, templateUrl } = {}) {
    const listAction = async ({ state, commit }, { params = {}, config = {} } = {}) => {
        commit('SET_LOADING', true);
        try {
            const res = await http.get(state.initURL, { params, ...config });
            const data = res.data;
            if (Array.isArray(data)) {
                commit('SET_LIST', data);
                commit('SET_LIST_META', {});
            } else {
                commit('SET_LIST', data.data || data.records || []);
                const { data: _d, records: _r, ...meta } = data;
                commit('SET_LIST_META', meta);
            }
            return data;
        } catch (error) {
            commit('SET_FORM_ERRORS', { message: getErrorMessage(error) });
            throw error;
        } finally {
            commit('SET_LOADING', false);
        }
    };

    return {
        namespaced: true,
        modules: {},
        state: () => ({
            initURL,
            templateUrl: templateUrl || '',
            list: [],
            listMeta: {},
            form: {},
            formErrors: {},
            loading: false,
            ...extraState,
        }),
        mutations: {
            SET_LIST(state, list) {
                state.list = list;
            },
            SET_LIST_META(state, meta) {
                state.listMeta = meta || {};
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
            RESET_STATE(state) {
                state.list = [];
                state.listMeta = {};
                state.form = {};
                state.formErrors = {};
                state.loading = false;
            },
        },
        actions: {
            list: listAction,
            index: listAction,
            async show({ state, commit }, uuid, config = {}) {
                const res = await http.get(`${state.initURL}/${uuid}`, config);
                commit('SET_FORM', res.data);
                return res.data;
            },
            async store({ state, commit }, form) {
                try {
                    const res = await http.post(state.initURL, form);
                    commit('SET_FORM_ERRORS', {});
                    return res.data;
                } catch (error) {
                    commit('SET_FORM_ERRORS', (error.response && error.response.data && error.response.data.errors) || {});
                    throw error;
                }
            },
            async update({ state, commit }, { uuid, form }) {
                try {
                    const res = await http.post(`${state.initURL}/${uuid}`, { ...form, _method: 'PUT' });
                    commit('SET_FORM_ERRORS', {});
                    return res.data;
                } catch (error) {
                    commit('SET_FORM_ERRORS', (error.response && error.response.data && error.response.data.errors) || {});
                    throw error;
                }
            },
            async patch({ state, commit }, { uuid, form }) {
                try {
                    const res = await http.patch(`${state.initURL}/${uuid}`, form);
                    commit('SET_FORM_ERRORS', {});
                    return res.data;
                } catch (error) {
                    commit('SET_FORM_ERRORS', (error.response && error.response.data && error.response.data.errors) || {});
                    throw error;
                }
            },
            async destroy({ state }, uuid, config = {}) {
                return http.delete(`${state.initURL}/${uuid}`, config);
            },
            async preRequisite({ state, commit }, params = {}) {
                const res = await http.get(`${state.initURL}/pre-requisite`, { params });
                commit('SET_FORM_ERRORS', {});
                return res.data;
            },
            resetFormErrors({ commit }) {
                commit('SET_FORM_ERRORS', {});
            },
            resetState({ commit }) {
                commit('RESET_STATE');
            },
            ...extraActions,
        },
        getters: {
            getFormErrors: (state) => state.formErrors,
            getUrl: (state) => state.initURL,
            ...extraGetters,
        },
    };
}

export default makeModule;
