import e from '../element.js';

import { getBookList } from '../api/getUserBooks.js';

export default () => {
  let booklist = getBookList();
  return e("section", {id: "book_list"}, 
    ...booklist.map( book => {
      return e("div", {id : "book"},
      e("a", {href: `/book/${book.id}`},
        e("img", {src: book.image, id : "image"})
      ));
    }),
    e("div", {id: "add"}, 
      e("span" , {id: "text"}, "책 추가하기")
    )
  );
}