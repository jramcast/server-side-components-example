if (process.env.BROWSER) {

    const classie = require('./classie');
    const Clipboard = require('./clipboard.min');
    require('./style.css');

    console.log('hola');
    (function() {
        [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
            var menuItems = menu.querySelectorAll('.menu__link'),
                setCurrent = function(ev) {
                    ev.preventDefault();
                    var item = ev.target.parentNode; // li
                    // return if already current
                    if (classie.has(item, 'menu__item--current')) {
                        return false;
                    }
                    // remove current
                    classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                    // set current
                    classie.add(item, 'menu__item--current');
                };
            [].slice.call(menuItems).forEach(function(el) {
                el.addEventListener('click', setCurrent);
            });
        });

        [].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
            link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
            new Clipboard(link);
            link.addEventListener('click', function() {
                classie.add(link, 'link-copy--animate');
                setTimeout(function() {
                    classie.remove(link, 'link-copy--animate');
                }, 300);
            });
        });
    })(window);
}




module.exports = (props = {}) => {
    return `
        <style>${props.style}</style>
        <nav class="mesh__menu menu menu--${props.animation}">
            <ul class="menu__list">
                <li class="menu__item menu__item--current"><a href="#" class="menu__link">Home</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Nuestros hoteles</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Promociones</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Convenciones</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Restaurantes</a></li>
                <li class="menu__line"></li>
            </ul>
        </nav>`;
};
