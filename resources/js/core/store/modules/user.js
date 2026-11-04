import Profile from './user/profile';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        profile: Profile,
    },
    ...makeModule('/app/users'),
};
