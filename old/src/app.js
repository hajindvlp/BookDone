import e from './modules/element';
import c from './modules/component';
import { diff } from './modules/v-dom';
import Router from './routes/router';
import './css/style.css';

import Navbar from './components/sidemenu';

class App extends c {
  render() {
    return e('div', {id: "app"},
      Navbar(),
      Router.route()
    )
  }
}

if(document) {
  diff(undefined, e(App), document.getElementById("root"));    
}