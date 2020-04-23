import e from './element.js';
import c from './component.js';
import Router from './router.js'
import { renderComponent } from './v-dom.js';

import Books from './components/books.js';

class App extends c {
    render() {
        return e('div', {id: "app"},
            Router.init()
        )
    }
}

// console.log(Router);
renderComponent(new App(), document.querySelector('#root'));