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

    route() {
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

export default Router;