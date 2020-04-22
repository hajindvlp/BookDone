let bookJSON = JSON.parse(`
[
    {
        "title" : "신화 콘서트",
        "writer" : "김상훈",
        "publisher" : "행복한작업실",
        "image" : "http://image.yes24.com/goods/90004167/800x0",
        "read" : 12,
        "content" : [
            {
                "title" : "title of chapter",
                "pagenum" : 12  
            }
        ],
        "notes" : [
            {
                "date" : "date of note",
                "content" : "content of note"
            }
        ]   
    },
    {
        "title" : "지금 시작하는 생각 인문학",
        "writer" : "이화선",
        "publisher" : "비즈니스북스",
        "image" : "http://image.yes24.com/goods/89967132/800x0",
        "read" : 12,
        "content" : [
            {
                "title" : "title of chapter",
                "pagenum" : 12  
            }
        ],
        "notes" : [
            {
                "date" : "date of note",
                "content" : "content of note"
            }
        ]   
    }
]
`);

export function getBookList() {
    // get book info via fetch()
    let books = JSON.parse(bookJSON);
    return books;
}

export function getBookInfo(bookName) {
    let books = JSON.parse(bookJSON);
    
    books.forEach(book => {
        if(book.title == bookName) return book;
    });
    return 404;
}