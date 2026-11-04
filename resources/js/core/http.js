import axios from 'axios';

const http = axios.create({
    baseURL: '/api/v1',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
});

export function getErrorMessage(error) {
    const { response } = error || {};
    if (!response) return (error && error.message) || 'Something went wrong';
    if (response.status === 422 && response.data && response.data.errors) {
        return Object.values(response.data.errors).flat().join(' ');
    }
    return (response.data && (response.data.message || response.data.error)) || response.statusText;
}

http.interceptors.request.use((config) => {
    const token = document.head.querySelector('meta[name="csrf-token"]');
    if (token) {
        config.headers.common = config.headers.common || {};
    }
    return config;
});

http.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error;
        if (response && response.status === 401) {
            window.dispatchEvent(new CustomEvent('auth:expired'));
        }
        return Promise.reject(error);
    },
);

export default http;
export { http as axiosInstance };
