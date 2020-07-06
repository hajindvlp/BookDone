import e from '../element';

export default () => {
  return e("header", {id : "header"}, 
    e("h1", {id: "header_title"}, "아 책 다 읽었다!"),
    e("div", {id: "hSperator"})
  )
}