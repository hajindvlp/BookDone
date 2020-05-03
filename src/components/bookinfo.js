// url : /book/[book_name]

import e from '../element.js';
import page404 from './404.js';

import { getBookInfo } from '../api/getbook.js';

export default (bookID) => {
  let book = getBookInfo(bookID);
  
  if(book) {
    return e("section", {"id" : "book_info"},
      e("img", {id : "image", src : book.image}),
      e("p", {id: "title"}, book.title),
      e("p", {id: "writer"}, book.writer),
      e("p", {id: "publisher"}, book.publisher),
      e("div", {id: "content_list"}, 
        e("h2", {id: "content_title"}, "차례"),
	        ...book.content.map(content => {
	          return e("li", {id: "content"}, 
	            e("p", {id: "content_title"}, content.title),
	            e("p", {id: "content_pagenum"}, content.pagenum.toString())                    
	          )
	        })
      ),
      e("div", {id: "note_list"}, 
        e("h2", {id: "note_title"}, "노트"),
	        ...book.notes.map(note => {
	          return e("li", {id: "note"},
	            e("p", {id: "note_date"}, note.date),
	            e("p", {id: "note_content"}, note.content)
	          )
	        })
      )
    );
  } else {
    return page404();
  }
};