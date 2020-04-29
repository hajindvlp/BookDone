let bookJSON = `
[
    {
        "id" : "wjdgkwls",
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
        "id" : "wjdalstj",
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
    },
    {
        "id" : "wjdshdud",
        "title" : "능률보카 어원편",
        "writer" : "능률영어교육연구소",
        "publisher" :" NE능률",
        "image" : "http://image.yes24.com/goods/45512761/800x0",
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
        "id" : "qkrcnsgml",
        "title" : "워드마스터 Word Master 중등 실력",
        "writer" : "박혜란, 조은정, 홍미정",
        "publisher" :"이투스북",
        "image" : "http://image.yes24.com/goods/32456200/800x0",
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
`;

export function getBookList() {
    // get book info via fetch()
    let books = JSON.parse(bookJSON);
    return books;
}

export function getBookInfo(bookID) {
    let books = JSON.parse(bookJSON);
    
    for(let book of books) {
        if(book.id === bookID)
            return book;
    }
    return null;
}