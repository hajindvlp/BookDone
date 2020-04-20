import App from './components/app.js'

const routeDict = [
    "/" 
];

function routes(path) {
    console.log(path);
    let parse_path = path.split("/");

    console.log(parse_path);
}

export default routes;
