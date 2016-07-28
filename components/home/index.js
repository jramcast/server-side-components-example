const Mesh = require('../../lib/mesh-component');


if (process.env.BROWSER) require('./style.less');

/**
 * Home is simply a list of other components
 */

const home = Mesh({});

module.exports = (props) => home.renderChildren(props.children);