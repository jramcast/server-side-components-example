if (process.env.BROWSER) require('./style.less');

module.exports = (props = {}) => {
    return `<div class="mesh__logo">
        <a href="http://www.hotelestequendama.com/" title="Hoteles Tequendama">
            <img src="http://www.hotelestequendama.com/static/corporativa/images/logo.svg" 
                alt="Hoteles Tequendama" title="Hoteles Tequendama" height="63" width="131">
        </a>
    </div>`
}