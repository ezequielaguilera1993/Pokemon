import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { Link } from 'react-router-dom';//si precise routing

import Styles from './Tarjeta.module.css'; //hoja de estilos
import { capitalCase } from "../../../util";



function Tarjeta({ name, types, imagen, fuerza, id, idPokemonCreado }) {

    let imgTarjeta = id || idPokemonCreado
        ?
        <Link to={"/detalle/" + id}>
            <img src={imagen} height="80%" />
        </Link>
        :

        <img src={imagen} height="80%" />

    return (
        <div id={Styles.tarjeta} style={{ width: "fit-content", margin: "1vh 2vw" }}>

            <div style={{ fontSize: "35px" }}>{capitalCase(name)}</div>

            {
                types.length === 1 ?
                    <div>Tipo: {capitalCase(types)}</div>
                    :
                    <div>Tipos: {capitalCase(types).join(", ")}</div>
            }

            <div>Fuerza: {fuerza} </div>
            {
                imgTarjeta
            }

        </div>

    )

}


export default connect(null)(Tarjeta);



