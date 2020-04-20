import App from './components/app.js';
import Router from './router.js'

Router(window.location.pathname);
document.getElementById("root").appendChild(App());
