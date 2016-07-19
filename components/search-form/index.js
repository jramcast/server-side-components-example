if (process.env.BROWSER) {
    require('font-awesome/css/font-awesome.css')
    require('./style.less');
}

module.exports = (props = {}) => {
    return `<div class="motor ">
        <form id="motorform" method="post" action="http://es.tequendamacorpo.bookingsercotel.com/booking/rooms_availability_sercotel.htm">
            <div style="display:none"><input type="hidden" name="csrfmiddlewaretoken" value="Eb4SW47haxROnVzgcVQYyX5ObJJvns9V"></div>
            <input id="id_cod_oferta" type="hidden" value="" name="cod_oferta">
            <input id="id_noches" type="hidden" value="1" name="noches">
            <div class="box_inside"><div class="select_hotel">
                <div class="destino">
                    <!-- <input id="id_destino" readonly="readonly" type="text" name="destino" maxlength="100" placeholder="Seleccionar hotel"> -->
                    <input type="hidden" name="cod_destino" id="id_coddestino">
                    <input id="id_destino" readonly="readonly" type="text" name="destino" maxlength="100" placeholder="Selecciona un hotel">
                    <em class="fa fa-angle-down"></em>
                    <div class="listDowHotels" id="bcdestino" style="display: none;">
                        <span class="close">x</span>
                        <ul>
                            <li><a href="javascript:void(0)" data-cod="TEST" data-txt="All Hotels" class="all_hotels">All Hotels</a></li>
                            <li><a href="javascript:void(0)" title="Hotel Tequendama Bogotá" data-cod="347" data-txt="Hotel Tequendama Bogotá" data-dismiss="modal">Hotel Tequendama Bogotá</a></li>
                            <li><a href="javascript:void(0)" title="Hotel Suites Tequendama Bogotá" data-cod="348" data-txt="Hotel Suites Tequendama Bogotá" data-dismiss="modal">Hotel Suites Tequendama Bogotá</a></li>
                            <li><a href="javascript:void(0)" title="Hotel Tequendama Inn Estación Buenaventura by Sercotel" data-cod="349" data-txt="Hotel Tequendama Inn Estación Buenaventura by Sercotel" data-dismiss="modal">Hotel Tequendama Inn Estación Buenaventura by Sercotel</a></li>
                            <li><a href="javascript:void(0)" title="Hotel Tequendama Inn Santa Marta by Sercotel" data-cod="350" data-txt="Hotel Tequendama Inn Santa Marta by Sercotel" data-dismiss="modal">Hotel Tequendama Inn Santa Marta by Sercotel</a></li>
                            <li><a href="javascript:void(0)" title="Hotel Tequendama Inn Cartagena by Sercotel" data-cod="351" data-txt="Hotel Tequendama Inn Cartagena by Sercotel" data-dismiss="modal">Hotel Tequendama Inn Cartagena by Sercotel</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fechas ">
                <div class="entrada">
                    <div class="bordeFechas">
                        <span class="">
                            <strong>19</strong>
                            <em>Jul 2016</em>
                        </span>
                        <input readonly="readonly" type="text" name="entrada" value="19/07/2016" id="id_entrada" class="hasDatepicker">
                    </div>
                </div>
                <div class="salida">
                    <div class="bordeFechas ">
                        <span class="">
                            <strong>20</strong>
                            <em>Jul 2016</em>
                        </span>
                        <input readonly="readonly" type="text" name="salida" value="20/07/2016" id="id_salida" class="hasDatepicker">
                    </div>
                </div>
            </div>
            <div class="consulta">
                <div class="box-promo">
                    <span class="promocode">
                        ¿Tiene un
                        <a title="haz clic aquí" href="javascript:void(0)">código promocional?</a>
                    </span>
                    <span class="codpromo" style="display: none;">
                        <input id="id_codpromo" type="text" name="codigo" maxlength="50" placeholder="Código promocional">
                        <em class="fa fa-times cerrar-input"></em>
                    </span>
                </div>
                <div class="box-check btn-dispo">
                    <button title="check avalability" class="btn btn-motor btn-consulta">Comprobar disponibilidad</button>
                </div>
            </div>
        </div>
    </form>
</div>`;
}