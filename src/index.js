import Router from './router.js'

document.getElementById("root").appendChild(
    Router(decodeURI(window.location.pathname))
);
