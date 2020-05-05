import {getBooks} from './getBook.js'

let userBookJSON = `[
    "wjdgkwls",
    "wjdalstj",
    "wjdshdud",
    "qkrcnsgml"
]
`;

export function getBookList() {
    // api call to /user/book
    let userBooks = JSON.parse(userBookJSON);
    return getBooks(...userBooks);
}