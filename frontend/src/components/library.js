import e from '../element.js';

import {getLibraryBook} from '../api/getLibraryBook.js';
import {getBooks} from '../api/getBook.js';

export default () => {
  let libraryBooks = getLibraryBook();

  return e("section", {id: "library"},
    ...libraryBooks.map(lib => {
      let books = getBooks(...lib.books);

      return e("div", {id: "tag"},
        e("p", {id: "title"}, lib.tag),
        e("p", {id: "seperator"}, "|"),
        e("p", {id: "desc"}, lib.desc),
        e("div", {id: "books"}, 
          ...books.map(book => {
            return e("div", {id: "book"},
              e("img", {id: "image", src: book.image})
            )
          })
        )
      )
    })
  )
}