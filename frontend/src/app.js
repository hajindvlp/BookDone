import e from './modules/element.js';
import c from './modules/component.js';
import { diff } from './modules/v-dom.js';
import Router from './router.js'

import Navbar from './components/sidemenu.js';

class App extends c {
    render() {
        return e('div', {id: "app"},
            Navbar(),
            Router.init()
        )
    }
}

if(document) {
    diff(undefined, e(App), document.getElementById("root"));    
}