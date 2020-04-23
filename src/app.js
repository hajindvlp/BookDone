import e from './element.js';
import c from './component.js';
import { renderComponent } from './v-dom.js';

import Books from './components/books.js';

class App extends c {
    render() {
        return e('div', {id: "app"},
            Books()
        )
    }
}

renderComponent(new App(), document.querySelector('#root'));