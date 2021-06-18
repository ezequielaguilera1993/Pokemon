
import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux

import './Cargando.css'; //hoja de estilos



 function Cargando () {


    return (
        <img src='https://pre.entrenadorespogo.com/wp-content/themes/understrap-pogo/yenke/resources/loading-pokeball.gif' />
    )

}


///SOLO SI TIENE QUE LEER EL ESTADO
function mapeoState(state) {
    return { 
        toShowPokes:state.toShowPokes
    }
}

//<--SOLO SI TIENE QUE MODIFICAR EL ESTADO EL SEGUNDO PARAMETRO
export default connect(mapeoState)(Cargando);
