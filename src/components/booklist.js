import e from '../element.js';

import { getBookList } from '../api/getbook.js';

export default () => {
    let booklist = getBookList();
    return e("div", {id: "book-list"}, 
        ...booklist.map( book => {
            return e("div", {id : "book"}, 
                e("img", {src: book.image, id : "image"}),
                e("p", {id: "title"}, book.title)
            )
    }));
}