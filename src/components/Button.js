import { Element } from './Element.js';

const style = "";

export function Button(Child, props) {
    return new Element({TagName: "div", Child: Child, Id: "Button", Style: style});
}