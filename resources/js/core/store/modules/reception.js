import Enquiry from './reception/enquiry';
import Enquiryqualification from './reception/enquiryQualification';
import Enquirydocument from './reception/enquiryDocument';
import Enquiryfollowup from './reception/enquiryFollowUp';
import Visitorlog from './reception/visitorLog';
import Gatepass from './reception/gatePass';
import Complaint from './reception/complaint';
import Calllog from './reception/callLog';
import Correspondence from './reception/correspondence';
import Query from './reception/query';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        enquiry: Enquiry,
        enquiryQualification: Enquiryqualification,
        enquiryDocument: Enquirydocument,
        enquiryFollowUp: Enquiryfollowup,
        visitorLog: Visitorlog,
        gatePass: Gatepass,
        complaint: Complaint,
        callLog: Calllog,
        correspondence: Correspondence,
        query: Query,
    },
};
