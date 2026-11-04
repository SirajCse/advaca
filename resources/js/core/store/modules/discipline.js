import Incident from './discipline/incident';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        incident: Incident,
    },
};
