import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { Link } from 'react-router-dom';//si precise routing

import './Tarjeta.css'; //hoja de estilos



function Tarjeta({ name, types, imagen, fuerza, id, idPokemonCreado }) {

    return (
        <div id="tarjeta">
            <div>{name[0].toUpperCase()+name.slice(1)}</div>
            <div>{types.join("  ")}</div>
            <div>{fuerza} </div>
            {
                id||idPokemonCreado
                    ?
                    <Link to={"/detalle/"+id}>
                        <img src={imagen}/>
                    </Link>
                    :

                    <img src={imagen} />
            }



        </div>

    )

}


export default connect(null)(Tarjeta);
