const logo =  require('../logo');
const menu =  require('../menu');

if (process.env.BROWSER) require('./style.less');

module.exports = (props = {}) => {
    const {hello} = props;
    return `<header
      class="mesh__header">
        <div col="row">
            <div class="col-md-2">${logo()}</div>
            <div class="col-md-10">${menu()}</div>
        </div>
    </header>`;
}