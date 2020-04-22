// url : /book/[book_name]

import e from '../element.js';

import header from './header.js';
import bookinfo from './bookinfo.js';

export default (bookID) => {
    return e("div", {id : "book"},
        header(),
        bookinfo(booID)
    )
};