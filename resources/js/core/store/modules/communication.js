import Announcement from './communication/announcement';
import Email from './communication/email';
import Sms from './communication/sms';
import Whatsapp from './communication/whatsapp';
import Pushmessage from './communication/pushMessage';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        announcement: Announcement,
        email: Email,
        sms: Sms,
        whatsapp: Whatsapp,
        pushMessage: Pushmessage,
    },
};
