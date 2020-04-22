import Books from './components/books.js';
import Book  from './components/book.js';
import page404 from './components/404.js';

const routeDict = [
    {
        url : "book",
        function : Books,
        children : [
            {
                url : ":bookname",
                function : Book,
                args : [
                    "bookname"
                ]
            }
        ]
    }, 
];

function getRoute(path, routeTree) {
    if(!path || !routeTree) return null;
    if(path.length === 0) return null;

    for(let route of routeTree) {
        if(route.url === path[0]) {
            let childRoute = getRoute(path.shift(), route.children);
            console.log(path, route);
            if(!route.children || !childRoute) return route.function();
            if(childRoute) return childRoute;
            return null;
        }
    }
}

export default function routes(path) {
    console.log(path);
    let parse_path = path.split("/");

    parse_path.shift();
    let routeTree = routeDict;
    let route = getRoute(parse_path, routeTree);
    if(!route) return page404();
    return route;
}
