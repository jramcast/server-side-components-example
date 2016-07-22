const Mesh = require('../../lib/mesh-component');


if (process.env.BROWSER) require('./style.less');

/**
 * Home is simply a list of other components
 */
module.exports = (props = {}) => {

    return props.children
        .map( childSettings => renderComponent(childSettings.component, childSettings.props) )
        .join();
}


Mesh({
    draw: render
})
