const renderComponent = (name, props) => `<div class="${props._class}">${require('../' + props.children[0].component)(props.children[0].props)}</div>`;
const mesh = require('../../lib/mesh-component');

function GridableMixin () {

    return mesh({
        renderRows,
        renderRow
    });

    function renderRows(rows) {
        return rows.map(renderRow).join('');
    }

    function renderRow(row) {
        return `<div col="row">${renderColumns(row.cols)}</div>`;
    }

    function renderColumns(columns) {
        return columns.map(renderColumn).join('');
    }

    function renderColumn(column) {
        return `<div class="${column.props._class}">${renderColumnChildren(column.props.children)}</div>`;
    }

    function renderColumnChildren(components = []) {
        return components.map(comp => comp.component(comp.props));
    }

}

module.exports = (target) => GridableMixin.call(target);