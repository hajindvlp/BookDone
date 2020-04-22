import book from './components/book.js';
import Router from './router.js'

Router(window.location.pathname);
document.getElementById("root").appendChild(book("신화 콘서트"));
