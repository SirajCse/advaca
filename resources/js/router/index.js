import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import routes from './routes';

NProgress.configure({ showSpinner: false });

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

router.beforeEach(async (to, from, next) => {
    NProgress.start();

    if (to.path === '/error') {
        next();
        return;
    }

    const store = (await import('@/core/store')).default;

    // bootstrap app config once
    if (!store.state.config.isLoaded) {
        try {
            await store.dispatch('config/index', { params: { url: window.location.pathname } });
        } catch (error) {
            // config endpoint might be unreachable during setup
        }
    }

    const requiresInstall = (store.state.config.system || {}).requires_install;
    if (requiresInstall && to.name !== 'Install') {
        next({ name: 'Install' });
        return;
    }
    if (!requiresInstall && to.name === 'Install' && store.state.config.isLoaded) {
        next({ name: 'Login' });
        return;
    }

    // auth bootstrap once per session
    const tokenValid = store.state.auth.isTokenValid;
    const hasToken = Boolean(document.cookie.match(/advaca_token/) || store.state.auth.token);
    if (!tokenValid && hasToken) {
        try {
            await store.dispatch('auth/user');
        } catch (error) {
            store.commit('auth/RESET');
        }
    }

    const belongsTo = to.matched.find((r) => r.meta.belongsTo);
    const scope = belongsTo ? belongsTo.meta.belongsTo : 'auth';
    const isAuthenticated = store.getters['auth/user/hasAnyPermission'](['*']) && Boolean(store.state.auth.user && store.state.auth.user.uuid);

    if (scope === 'auth' && !isAuthenticated && to.name !== 'Login') {
        next({ name: 'Login', query: { ref: to.fullPath } });
        return;
    }
    if (scope === 'guest' && isAuthenticated && ['Login', 'Register'].includes(to.name)) {
        next({ name: 'Home' });
        return;
    }

    // permission guard
    const permissions = to.meta.permissions || to.matched.reduce((acc, r) => r.meta.permissions || acc, null);
    if (permissions && permissions.length) {
        const allowed = store.getters['auth/user/hasAnyPermission'](permissions) || store.getters['auth/user/isSuperAdmin'];
        if (!allowed) {
            next({ name: 'Error403' });
            return;
        }
    }

    next();
});

router.afterEach((to) => {
    NProgress.done();
    const title = to.meta.title || to.meta.label;
    if (title) {
        import('@/core/trans').then(({ default: trans }) => {
            document.title = trans(title);
        });
    }
});

export default router;
