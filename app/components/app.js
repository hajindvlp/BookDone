import h from '../element.js';

export default () => {
    return h(
        'div',
        null,
        'Hello, vDOM',
        h('h1', null, 'title?')
    );
};

