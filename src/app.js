import e from './element.js';
import c from './component.js';
import Router from './router.js'
import { renderComponent, diff } from './v-dom.js';

import Header from './components/header.js';

class App extends c {
    render() {
        return e('div', {id: "app"},
            Header(),
            Router.init()
        )
    }
}

// console.log(Router);

diff(undefined, e(App), document.getElementById("root"));