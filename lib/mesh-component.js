function RendererMixin() {

    return Object.assign(this, {
        renderChildren
    });

    function renderChildren(componentConfigList = []) {
        return componentConfigList
            .map(renderChild)
            .join('');
    }

    function renderChild(componentConfig) {

        return componentConfig.component(componentConfig.props);
    }

}

module.exports = (target = {}) => RendererMixin.call(target);

