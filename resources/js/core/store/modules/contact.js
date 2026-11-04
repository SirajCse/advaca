import Documenttype from './contact/documentType';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        documentType: Documenttype,
    },
    ...makeModule('/app/contacts'),
};
