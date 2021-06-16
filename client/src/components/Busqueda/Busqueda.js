import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { Link } from 'react-router-dom';//si precise routing

import { setPunteros } from "../../actions"

import './Busqueda.css'; //hoja de estilos

console.log("inicio") //ESTO SE EJECUTA UNA SOLA VEZ, CUANDO TOCAS F5 !!! NO CUANDO VOLVES DE UNA RUTA!



function Busqueda({ setPunteros, punteros }) {

    //SE EJECUTA EN CADA CAMBIO DE ESTADO, Y CUANDO VOLVER DE OTRA RUTA TAMBIEN!!
    
//setPunteros()//si se le pasa payload diferentes, entra en michael bucle infinito! (Y DIFERENTES ES PASARLE DIFERENTES DATOS PRIMITIVOS O UN OBJETO CREADO DE NOVO -ES OTRA REFERENCIA- )

//setPunteros(obj), ademas, si modificas punteros uh otra cosa modifica punteros no tiene efecto porque se actualiza aca a cero!

//Poniendo un obj arriba no cicla mas porque le pasa la referencia pero igual esta el problema de arriba. 

console.log("francoEnComponenete")



    return (<div>

<input type="checkbox" onClick={()=>setPunteros(10)}></input>


        <Link to="/createPoke">

            <button onClick={()=>setPunteros([6,10])}>
                createPoke {punteros}
            </button>

        </Link>

        <Link to="/detalle">
            <button >
                Detalle {punteros}
            </button>
        </Link>

    </div>

    )
}

///SOLO SI TIENE QUE LEER EL ESTADO
function mapeoToState(state) {
    return {
        punteros: state.punteros
    }
}


export default connect(mapeoToState, { setPunteros })(Busqueda);



/* function mapeoState(state) {
    return {
    }
  }


  export default connect(mapeoState, { , })(); */