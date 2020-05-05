import { renderComponent } from './v-dom.js'

export default class Component {
  constructor(props) {
    this.props = props
    this.state = {}
  }

  setState(state) {
    this.state = Object.assign({}, state)
    renderComponent(this)
  }
}