import Books from './components/books.js';
import Book  from './components/book.js';
import page404 from './components/404.js';

class Router {
    constructor() {
        this.routes = [];
    }

    get(uri, callback) {
        const route = {
            uri,
            callback
        }
        this.routes.push(route);
    }

    init() {
        let path = decodeURI(window.location.pathname);
        let pathParse = path.split('/')
        for(let route of this.routes) {
            let match = false;
            let uriParse = route.uri.split('/');
            let req = {
                path,
                attributes: {}
            }

            if(uriParse.length == pathParse.length) 
                for(let idx in pathParse) {
                    if(uriParse[idx].startsWith(":")) {
                        let attrName = uriParse[idx].substr(1);
                        req.attributes[attrName] = pathParse[idx];
                        match = true;
                    } else if(pathParse[idx] !== uriParse[idx]) {
                        match = false;
                        break;
                    } else if(pathParse[idx] === uriParse[idx]) {
                        match = true;
                    }   
                }

            if(match) {
                return route.callback.call(this, req);
            }
        }
    }
}

const router = new Router();

router.get('/book', req => {
    return Books();
});

router.get('/book/:bookID', req => {
    console.log(req);
    return Book(req.attributes.bookID);
});

router.get('/:d', req => {
    return page404();
})

export default router;