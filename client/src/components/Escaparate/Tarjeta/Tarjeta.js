import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { Link } from 'react-router-dom';//si precise routing

import './Tarjeta.css'; //hoja de estilos
import { capitalCase } from "../../../util";



function Tarjeta({ name, types, imagen, fuerza, id, idPokemonCreado }) {

    let imgTarjeta = id || idPokemonCreado
        ?
        <Link to={"/detalle/" + id}>
            <img src={imagen} width="80%" />
        </Link>
        :

        <img src={imagen} width="80%" />

    return (
        <div id="tarjeta">
            <div style={{ fontSize: "35px" }}>{capitalCase(name)}</div>

            {//"tipos" plural o no?
                types.length === 1 ?
                    <div>Tipo: {capitalCase(types)}</div>
                    :
                    <div>Tipos: {capitalCase(types).join(", ")}</div>
            }
            <div>Fuer<span style={{fontSize:"17px"}}>Z</span>a: {fuerza} </div>
            {
                imgTarjeta
            }

        </div>

    )

}


export default connect(null)(Tarjeta);
