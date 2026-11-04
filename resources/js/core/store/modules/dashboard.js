import Search from './dashboard/search';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        search: Search,
    },
    ...makeModule('/app/dashboard/'),
};
