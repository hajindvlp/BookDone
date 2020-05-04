import e from '../element.js';

export default () => {
    return e("section", null, e("h1", {id: "404"}, "404 not found"));
}