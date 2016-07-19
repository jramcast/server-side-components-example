const logo =  require('../logo');
const menu =  require('../menu');
const langSelector =  require('../lang-selector');

if (process.env.BROWSER) require('./style.less');

module.exports = (props = {}) => {
    const {hello} = props;
    return `<header
      class="mesh__header">
        <div col="row">
            <div class="col-md-2">${logo()}</div>
            <div class="col-md-8">${menu()}</div>
            <div class="col-md-2">${langSelector()}</div>
        </div>
    </header>`;
}