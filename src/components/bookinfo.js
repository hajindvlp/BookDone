import e from '../element.js';

import { getBookInfo } from '../api/getbook';

export default (bookname) => {
    let book = getBookInfo(bookname);
    console.log(book);

    return e("div", {"id" : "book_info"},
        e("img", {id : "book_info_image", src : book.image}),
        e("p", {id: "book_info_title"}, book.title),
        e("p", {id: "book_info_writer"}, book.writer),
        e("p", {id: "book_info_publisher"}, book.publisher),
        e("div", {id: "book_info_content_list"}, 
            e("h2", {id: "book_info_content_title"}, "차례"),
            ...book.content.map(content => {
                return e("li", {id: "book_info_content"}, 
                    e("p", {id: "book_info_content_title"}, content.title),
                    e("p", {id: "book_info_content_pagenum"}, content.pagenum)                    
                )
            })
        ),
        e("div", {id: "book_info_note_list"}, 
            e("h2", {id: "book_info_note_title"}, "노트"),
            ...book.notes.map(note => {
                return e("li", {id: "book_info_note"},
                    e("p", {id: "book_info_note_date"}, note.date),
                    e("p", {id: "book_info_note_content"}, note.content)
                )
            })
        )
    );
}