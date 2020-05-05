import {getBooks} from './getBook.js'

let userBooks = `[
    "wjdgkwls",
    "wjdalstj",
    "wjdshdud",
    "qkrcnsgml",
]
`;

export function getBookList() {
    // api call to /user/book
    
    return getBooks(...userBooks);
}