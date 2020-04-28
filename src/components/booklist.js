import e from '../element.js';

import { getBookList } from '../api/getbook.js';

export default () => {
  let booklist = getBookList();
  return e("div", {id: "book_list"}, 
    ...booklist.map( book => {
      return e("div", {id : "book"}, 
        e("img", {src: book.image, id : "book_list_image"}),
        e("p", {id: "book_list_title"}, book.title)
      )
  	})
  );
}