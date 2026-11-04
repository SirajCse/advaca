import { getErrorMessage } from './http';

/**
 * Form helper — mirrors the original $form contract:
 * wraps a request, captures validation errors into the module store and
 * surfaces toast notifications.
 */
export default {
    async submit(store, action, payload, { onSuccess, onError, successMessage } = {}) {
        store.commit('SET_FORM_ERRORS', {});
        try {
            const res = await store.dispatch(action, payload);
            if (successMessage) {
                window.__toast && window.__toast.success(successMessage);
            }
            if (onSuccess) onSuccess(res);
            return res;
        } catch (error) {
            const { response } = error || {};
            if (response && response.status === 422 && response.data && response.data.errors) {
                store.commit('SET_FORM_ERRORS', response.data.errors);
            } else {
                window.__toast && window.__toast.error(getErrorMessage(error));
            }
            if (onError) onError(error);
            throw error;
        }
    },
};
