const searchForm = require('../search-form');
const carousel = require('../carousel');

if (process.env.BROWSER) {
    require('./style.less');  
}

module.exports = (props = {}) => {
    const {hello} = props;
    return `<div class="mesh__home-info container">
            <div class="row">
                <h4>Web oficial Hoteles Tequendama</h4>
                <p class="texto">Ubicados en las principales ciudades de Colombia, los <strong>Hoteles Tequendama</strong> 
                le aseguran la mejor propuesta de alojamiento con suites y habitaciones confortables, servicios de spa &amp; wellness, 
                restaurantes, actividades, salas de reuniones…<br><br>Conozca todos nuestros hoteles y reserve todas sus estadías en 
                Colombia en los Hoteles Tequendama al mejor precio online garantizado. 
                Le esperamos en la <strong>web oficial de Hoteles Tequendama</strong>.<br></p>
            </div>
            <div class="row">
            ${carousel()}
            </div>
    </div>`;
}