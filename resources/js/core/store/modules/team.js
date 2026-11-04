import Role from './team/role';
import Permission from './team/permission';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        role: Role,
        permission: Permission,
    },
    ...makeModule('/app/teams'),
};
