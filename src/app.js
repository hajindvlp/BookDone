import e from './element.js';
import Component from './component.js';
import {diff} from './v-dom.js';

import Router from './router.js'

import Books from './components/books.js';

// document.getElementById("root").appendChild(
//     Router(decodeURI(window.location.pathname))
// );

class App extends Component {
    render() {
        return e('div', {id: "app"},
            Books()
        )
    }
}

const render = (vnode, parent) => {
    diff(undefined, vnode, parent);
}

render(e(App), document.querySelector("#root"));