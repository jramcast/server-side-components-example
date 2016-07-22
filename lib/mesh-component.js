module.exports = (target) => rendererMixin.call(target);

function rendererMixin() {
    return Object.assign(this, {
        render,
        renderIterable
    });
}

function renderIterable(componentConfigList) {
    return componentConfigList
        .map(render)
        .join();
}

function render(componentConfig) {
    return require('../components' + componentConfig.name)(componentConfig.props);
}