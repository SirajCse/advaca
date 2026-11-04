import Registration from './guestPayment/registration';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        registration: Registration,
    },
    ...makeModule('/app/guest-payments'),
};
