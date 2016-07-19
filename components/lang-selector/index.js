if (process.env.BROWSER) {
    require('./style.less');
    require('./select-fx');

    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {    
        new SelectFx(el);
    } );
} 


module.exports = (props = {}) => {
    return `<select class="cs-select cs-skin-elastic">
        <option value="" disabled selected>Select a Country</option>
        <option value="france" data-class="flag-france">France</option>
        <option value="brazil" data-class="flag-brazil">Brazil</option>
        <option value="argentina" data-class="flag-argentina">Argentina</option>
        <option value="south-africa" data-class="flag-safrica">South Africa</option>
    </select>`;
}