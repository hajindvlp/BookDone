import e from '../element.js'
import c from '../component.js';

import { getBookInfo } from '../api/getbook.js';

export default class EditBook extends c {
    constructor(props) {
        super(props);
        this.state = {
            test: "d"
        }
    }

    clickButton() {
        console.log("dsafdds");
    }

    render() {
        return e('button', {onclick: function () {
            console.log("dsaf");
            setState({test: "dsfd"})
        }}, "Dd")
    }
}