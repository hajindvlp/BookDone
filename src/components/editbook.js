import e from '../element.js'
import c from '../component.js';

import { getBookInfo } from '../api/getbook.js';

export default class EditBook extends c {
    constructor(props) {
        super(props);

        this.state = {
            book: getBookInfo(props.attributes.bookID)
        }
        console.log(this.state.book);
    }

    render() {
        return e("div", {"id" : "book_edit"},
        e("form", {id: "form", action: `/book/edit/${this.state.book.id}`, method: "post"},

            e("img", {id : "image", src : this.state.book.image}),
            e("label", {for: "book_imgLink"}, "Image Link : "),
            e("input", {type: "text", value: this.state.book.image}),

            e("label", {}, "Title"),
            e("input", {type: "text", id: "title", value: this.state.book.title}),
            
            e("label", {}, "Writer"),
            e("input", {type: "text", id: "writer",  value: this.state.book.writer}),
            
            e("label", {}, "Publisher"),
            e("input", {type: "type", id: "publisher", value: this.state.book.publisher}),

            e("div", {id: "content_list"}, 
                e("h2", {id: "title"}, "차례"),
                ...this.state.book.content.map(content => {
                    return e("li", {id: "content"}, 
                        e("input", {type: "text", id: "title", value: content.title}),
                        e("input", {type: "text", id: "pagenum", value: content.pagenum.toString()})
                    )
                }),
                e("button", {id: "add", type: "button"}, "+"),
            ),

            e("div", {id: "note_list"}, 
                e("h2", {id: "note_title"}, "노트"),
                ...this.state.book.notes.map(note => {
                    return e("li", {id: "note"},
                        e("input", {type: "text", id: "date", value: note.date}),
                        e("input", {type: "text", id: "content", value: note.content})
                    )
                }),
                e("button", {id: "add", type: "button"}, "+"),
            ),
            e("button", {type: "submit"}, "변경내용 저장하기")
        ));
    }
}