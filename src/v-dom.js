const renderNode = vnode => {
    let el
  
    const { nodeName, attributes, children } = vnode
  
    if (vnode.split) return document.createTextNode(vnode)
  
    if (typeof nodeName === 'string') {
        console.log(nodeName, attributes, children);
        el = document.createElement(nodeName)
    
        for (let key in attributes) {
            el.setAttribute(key, attributes[key])
        }
    } else if (typeof nodeName === 'function') { 
        const component = new nodeName(attributes)
        el = renderNode(
            component.render(component.props, component.state)
        )
        component.base = el
    }
    (children || []).forEach(child => el.appendChild(renderNode(child)))
  
    return el
}
  
export const renderComponent = (component, parent) => {
    const oldBase = component.base;
    console.log(component, oldBase);
    component.base = renderNode(component.render(component.props, component.state));
    
    if(parent) {
        parent.appendChild(component.base);
    } else {
        oldBase.parentNode.replaceChild(component.base, oldBase);
    }
}