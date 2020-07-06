import e from '../modules/element';

export default () => {
    return e("section", null, e("h1", {id: "404"}, "404 not found"));
}