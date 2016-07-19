

if (process.env.BROWSER) {
    require('./style.less');
    const lory = require('lory.js').lory;
    document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelector('.js_slider');
        const loryInstance = lory(slider, {});
        setInterval(() => { loryInstance.next(); console.log(loryInstance.returnIndex()) }, 4000);
    });
}


module.exports = (props = {}) => {
    return `<div class="carousel slider js_slider">
        <div class="info">
            <h4>This is a title</h4>
            <h5>Additional explanantion</h5>
            <p>El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.</p>
        </div>
        <div class="frame js_frame">
            <ul class="slides js_slides">
                <li class="js_slide"><img width="100%" src="https://images.unsplash.com/photo-1468476775582-6bede20f356f?dpr=1&auto=compress,format&crop=entropy&fit=crop&w=1199&h=783&q=80"/></li>
                <li class="js_slide"><img width="100%" src="https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?dpr=1&auto=compress,format&crop=entropy&fit=crop&w=1199&h=674&q=80"/></li>
                <li class="js_slide"><img width="100%" src="https://images.unsplash.com/photo-1451431487663-470c5380d27c?dpr=1&auto=compress,format&crop=entropy&fit=crop&w=1199&h=674&q=80"/></li>
                <li class="js_slide"><img width="100%" src="https://images.unsplash.com/photo-1467173572719-f14b9fb86e5f?dpr=1&auto=compress,format&crop=entropy&fit=crop&w=1199&h=799&q=80"/></li>
            </ul>
        </div>
    </div>`;
}