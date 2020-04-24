import e from './element.js';
import BookList from './components/booklist.js';
import BookInfo  from './components/bookinfo.js';
import EditBook from './components/editbook.js';
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

router.get('/', req => {
    return BookList();
})

router.get('/book', req => {
    return BookList();
});

router.get('/book/:bookID', req => {
    return BookInfo(req.attributes.bookID);
});

router.get('/book/edit/:bookID', req => {
    return e(EditBook, req);
})

router.get('/:d', req => {
    return page404();
})

export default router;