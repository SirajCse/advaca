import Trip from './activity/trip';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        trip: Trip,
    },
};
