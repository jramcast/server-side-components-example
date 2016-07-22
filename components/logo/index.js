if (process.env.BROWSER) require('./style.less');


module.exports = (props = {}) => {

    return `
        <style>${props.style}</style>
        <div class="mesh__logo">
            ${ (props.link) ? renderImageWithLink() : renderImage() }
        </div>`

    function renderImageWithLink() {
        return `<a href="${props.link}" title="Hoteles Tequendama">
            ${renderImage()}
        </a>`
    }

    function renderImage() {
        return `<img src="${props.url}"
                alt="Hoteles Tequendama" title="Hoteles Tequendama" height="${props.height}" width="${props.width}">`
    }

}