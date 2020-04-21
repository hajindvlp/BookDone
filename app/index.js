import App from './components/app.js';
import BookList from './components/booklist.js'
import Router from './router.js'

Router(window.location.pathname);
document.getElementById("root").appendChild(BookList());
