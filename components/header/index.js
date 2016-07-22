const logo =  require('../logo');
const menu =  require('../menu');
const h1 =  require('../h1');
const langSelector =  require('../lang-selector');

if (process.env.BROWSER) require('./style.less');

const renderComponent = (name, props) => `<div class="${props._class}">${require('../' + props.children[0].component)(props.children[0].props)}</div>`;

module.exports = (props = {}) => {

    const cols =  props.children
        .map( childProps => renderComponent(childProps.component, childProps.props) )
        .join();

    return `<header class="mesh__header">
        <div class="row">
        ${cols}
        </div>
    </header> `;

    /*return `<header
      class="mesh__header">
        <div col="row">
            <div class="col-md-2">${logo()}</div>
            <div class="col-md-6">${menu()}</div>
            <div class="col-md-2">${h1()}</div>
            <div class="col-md-2">${langSelector()}</div>
        </div>
    </header>`;*/
}