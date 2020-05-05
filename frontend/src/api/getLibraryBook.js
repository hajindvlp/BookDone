import {getBook} from './getBook.js';

let libraryBooks = `[
    {
        "tag": "베스트 셀러",
        "desc": "우리 도서관에서 가장 핫한 책들~!",
        "books": [
            "wjdgkwls",
            "wjdalstj",
            "wjdshdud",
            "qkrcnsgml"
        ]
    },
    {
        "tag": "스테디 셀러",
        "desc": "꾸준한 재미와 깨달음을 선사하는 책들",
        "books": [
            "wjdgkwls",
            "wjdalstj",
            "wjdshdud",
            "qkrcnsgml"
        ]
    },
    {
        "tag": "신작",
        "desc": "새로 나온 따끈 따끈한 책들",
        "books": [
            "wjdgkwls",
            "wjdalstj",
            "wjdshdud",
            "qkrcnsgml"
        ]
    }
]`

export function getLibraryBook() {
    return JSON.parse(libraryBooks);
}