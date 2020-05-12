import e from '../modules/element.js';

export default () => {
    return e("section", null, e("h1", {id: "404"}, "404 not found"));
}