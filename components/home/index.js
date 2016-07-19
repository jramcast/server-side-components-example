const header = require('../header');
const showcase = require('../showcase');
const homeInfo = require('../home-info');
const footer = require('../footer');

if (process.env.BROWSER) require('./style.less');

module.exports = (props = {}) => {
    const {hello} = props;
    return `
        ${header()}
        ${showcase()}
        ${homeInfo()}
        ${footer()}
    `;
}