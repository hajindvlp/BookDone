import { Element } from './Element.js';

export function Text(props) {
    let text, style;

    text = style = "";
    if(props.Text) text = props.Text;
    if(props.Style) style = props.Style;
 
    return new Element({TagName: "p", Id: "Text", Child: text, Style: style});
}