// url : '/books' or /

import h from '../element.js';

import header from './header.js';
import booklist from './booklist.js';

export default () => {
    return h(
        'div', {id: "books"},
        header(),
        booklist()
    );
};

