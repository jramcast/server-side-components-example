const renderComponent = (name, props) => `<div class="${props._class}">${require('../' + props.children[0].component)(props.children[0].props)}</div>`;

module.exports = {

    renderRows() {
        return props.rows.map(renderRow).join();
    }

    renderRow(row) {
        return `<div col="row">${renderColumns(row.children)}</div>`;
    }

    renderColumns(columns) {
        return columns.map(renderColumn).join();
        return `<div class="col-md-2">${logo()}</div>`
    }

    renderColumn(column) {
        return `<div class="${column._class}">${renderColumnChildren(column.props.children)}</div>`;
    }

    renderColumnChildren(components = []) {
        return components.map(comp => require('../' + comp.component)(comp.props));
    }

}