const logo =  require('../logo');
const menu =  require('../menu');
const h1 =  require('../h1');
const langSelector =  require('../lang-selector');
const gridable = require('../gridable');

if (process.env.BROWSER) require('./style.less');

const header = gridable();

module.exports = function (props) {

    return `
        <style>${props.style}</style>
        <header class="mesh__header" style="position: relative">
            ${renderBackgroundImage()}
            ${header.renderRows(props.rows)}
        </header> `;

    function renderBackgroundImage() {
        const {backgroundImg} = props;
        if (backgroundImg) {
            return `<img src="${backgroundImg}" style="opacity: 0.3; position:absolute; top: 0; bottom: 0; left: 0; right: 0">`;
        }
        return '';
    }

}

