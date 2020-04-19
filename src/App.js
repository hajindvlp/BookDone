import { Element } from './components/Element.js';
import { Text } from './components/Text.js';

export function App() {
    let child = [
        Text({Text: "Title", Style:"font-size: 50px; margin: 0"}),
        Text({Text: "Content"})
    ];
    return new Element({TagName: "div", Child:child, Id: "text"});
}