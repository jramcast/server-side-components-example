if (process.env.BROWSER) {

    const classie = require('./classie');
    const Clipboard = require('./clipboard.min');
    require('./style.css');

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
    return `<nav class="menu menu--prospero">
            <ul class="menu__list">
                <li class="menu__item menu__item--current"><a href="#" class="menu__link">Home</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Gallery</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Portfolio</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Clients</a></li>
                <li class="menu__item"><a href="#" class="menu__link">Contact</a></li>
                <li class="menu__line"></li>
            </ul>
        </nav>`;
};
