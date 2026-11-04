import Page from './site/page';
import Menu from './site/menu';
import Block from './site/block';
import Post from './site/post';

import makeModule from '../../crud';

export default {
    namespaced: true,
    modules: {
        page: Page,
        menu: Menu,
        block: Block,
        post: Post,
    },
};
