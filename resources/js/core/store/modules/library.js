import Book from './library/book';
import Bookaddition from './library/bookAddition';
import Bookcopy from './library/bookCopy';
import Booklabel from './library/bookLabel';
import Transaction from './library/transaction';
import Bookwisetransaction from './library/bookWiseTransaction';
import Report from './library/report';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        book: Book,
        bookAddition: Bookaddition,
        bookCopy: Bookcopy,
        bookLabel: Booklabel,
        transaction: Transaction,
        bookWiseTransaction: Bookwisetransaction,
        report: Report,
    },
};
