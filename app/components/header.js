import e from '../element.js';

export default () => {
    return e("div", {id : "header"}, 
        e("h1", {id: "header_title"}, "아 책 다 읽었다!")
    )
}