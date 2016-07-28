if (process.env.BROWSER) require('./style.less');

module.exports = (props = {}) => {
    const {style, h1Text, subtitle, imgSrc, faClass} = props;

    return `
        <style>${props.style}</style>
        <div class="mesh__h1 oficial">
        ${renderLogo()}
        <div class="tit">${subtitle}</div>
        <h1 class="sub">${h1Text}</h1>
        <div class="hotel-name">
            <span>Lorem Ipsum Lorem Ipsum</span>
        </div>
    </div>`;

    function renderLogo() {
        const {faClass, imgSrc, imgWidth, imgHeight} = props;
        if (props.faClass) {
            return `<em class="fa ${faClass}"></em>`
        }
        return `<img src="${imgSrc}" alt="Oficial" title="Oficial" width="${imgWidth}" height="${imgHeight}">`
    }
}

