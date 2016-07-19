if (process.env.BROWSER) require('./style.less');

module.exports = (props = {}) => {
    const {hello} = props;
    return `<div class="mesh__h1 oficial">
        <img src="http://www.hotelestequendama.com/static/corporativa/images/logo.svg" alt="Oficial" title="Oficial" width="48" height="28">
        <div class="tit">Web oficial</div>
        <h1 class="sub">H1 title!</h1>
        <div class="hotel-name">
            <span>Lorem Ipsum es simplemente</span>
        </div>
    </div>`;
}