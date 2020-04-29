import e from '../element.js';

import { getBookList } from '../api/getbook.js';

export default () => {
  let booklist = getBookList();
  return e("section", {id: "book_list"}, 
    ...booklist.map( book => {
      return e("a", {href: `/book/${book.id}`},
      e("div", {id : "book"},
        e("img", {src: book.image, id : "image"})
      ));
    }),
    e("div", {id: "add"}, 
      e("span" , {id: "text"}, "책 추가하기")
    )
  );
}