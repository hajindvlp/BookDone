import e from './element.js';
import c from './component.js';
import Router from './router.js'
import { diff } from './v-dom.js';

import Navbar from './components/sidemenu.js';

class App extends c {
    render() {
        return e('div', {id: "app"},
            Navbar(),
            Router.init()
        )
    }
}

diff(undefined, e(App), document.getElementById("root"));