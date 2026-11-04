import Paymentmethod from './finance/paymentMethod';
import Feegroup from './finance/feeGroup';
import Feehead from './finance/feeHead';
import Feecomponent from './finance/feeComponent';
import Feeconcession from './finance/feeConcession';
import Feestructure from './finance/feeStructure';
import Feestructurecomponent from './finance/feeStructureComponent';
import Ledgertype from './finance/ledgerType';
import Ledger from './finance/ledger';
import Tax from './finance/tax';
import Transaction from './finance/transaction';
import Receipt from './finance/receipt';
import Dayclosure from './finance/dayClosure';
import Report from './finance/report';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        paymentMethod: Paymentmethod,
        feeGroup: Feegroup,
        feeHead: Feehead,
        feeComponent: Feecomponent,
        feeConcession: Feeconcession,
        feeStructure: Feestructure,
        feeStructureComponent: Feestructurecomponent,
        ledgerType: Ledgertype,
        ledger: Ledger,
        tax: Tax,
        transaction: Transaction,
        receipt: Receipt,
        dayClosure: Dayclosure,
        report: Report,
    },
};
