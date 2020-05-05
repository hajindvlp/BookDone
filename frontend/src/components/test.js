import e from '../element.js'
import c from '../component.js'

export default class Test extends c { 
    constructor(props) {
        super(props);
        this.state = {
            message: "dd"
        }
    }

    buttonClick(e) {
        this.setState({message: "gkgkgk"});
    }

    render() {
        return e('div', null,
            e("p", null, this.state.message),
            e("button", {onclick: this.buttonClick}, "Click This")
        )
    }
}