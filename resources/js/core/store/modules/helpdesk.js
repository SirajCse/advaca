import Faq from './helpdesk/faq';
import Ticket from './helpdesk/ticket';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        faq: Faq,
        ticket: Ticket,
    },
    ...makeModule('/app/helpdesks'),
};
