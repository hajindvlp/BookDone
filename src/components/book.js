// url : /book/[book_name]

import e from '../element.js';

import header from './header';
import bookinfo from './bookinfo';

export default (bookname) => {
    return e("div", {id : "book"},
        header(),
        bookinfo(bookname)
    )
};