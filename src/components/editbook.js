import e from '../element.js'
import c from '../component.js';

import { getBookInfo } from '../api/getUserBooks.js';

export default class EditBook extends c {
  constructor(props) {
    super(props);

    this.state = {
    	book: getBookInfo(props.attributes.bookID)
    }
    console.log(this.state.book);
  }

  render() {
    return e("section", {"id" : "book_edit"},
      e("form", {id: "book_edit_form", action: `/book/edit/${this.state.book.id}`, method: "post"},

      e("img", {id : "book_edit_image", src : this.state.book.image}),
      e("label", {for: "book_imgLink"}, "Image Link : "),
      e("input", {type: "text", value: this.state.book.image}),

      e("label", {}, "Title"),
      e("input", {type: "text", id: "book_edit_title", value: this.state.book.title}),
            
      e("label", {}, "Writer"),
      e("input", {type: "text", id: "book_edit_writer",  value: this.state.book.writer}),
            
      e("label", {}, "Publisher"),
      e("input", {type: "type", id: "book_edit_publisher", value: this.state.book.publisher}),

      e("div", {id: "book_edit_content_list"}, 
        e("h2", {id: "book_edit_content_title"}, "차례"),
        ...this.state.book.content.map(content => {
          return e("li", {id: "book_edit_content"}, 
            e("input", {type: "text", id: "book_edit_content_title", value: content.title}),
            e("input", {type: "text", id: "book_edit_content_pagenum", value: content.pagenum.toString()})
          )
        }),
        e("button", {id: "book_edit_content_add", type: "button"}, "+"),
      ),

      e("div", {id: "book_edit_note_list"}, 
        e("h2", {id: "book_edit_note_title"}, "노트"),
        ...this.state.book.notes.map(note => {
          return e("li", {id: "book_edit_note"},
            e("input", {type: "text", id: "book_edit_note_date", value: note.date}),
            e("input", {type: "text", id: "book_edit_note_content", value: note.content})
          )
        }),
        e("button", {id: "book_edit_note_add", type: "button"}, "+"),
      ),
      e("button", {type: "submit"}, "변경내용 저장하기")
      )
  	);
  }
}