const searchForm = require('../search-form');

if (process.env.BROWSER) {
    require('./style.less');  
    const element = document.getElementById('showcase');
    element.addEventListener('click', () => alert('clicked!'))
}

module.exports = (props = {}) => {
    const {hello} = props;
    return `<section id="showcase" class="mesh__showcase">
      <div id="large-section" class="large-section">
        <video autoplay loop width="100%">
            <source src="timelapse.mov" >
            Your browser does not support the video tag.
        </video>
        <h1 class="main-title">This is a title</h1>
        <p class="main-subtitle">more text (subtitle)</p>
        <div class="main-showcase">
            ${searchForm()}
        </div>
      </div>
    </section>`;
}