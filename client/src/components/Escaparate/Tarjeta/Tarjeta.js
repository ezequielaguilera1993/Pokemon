import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { setIdPk } from "../../../actions"//actions
import { Link } from 'react-router-dom';//si precise routing

import './Tarjeta.css'; //hoja de estilos



function Tarjeta({ setIdPk, name, types, imagen, fuerza, id }) {

    return (
        <div>
            <div>{name}</div>
            <div>{types.join("  ")}</div>
            <div>{fuerza} </div>
            {
                id
                    ?
                    <Link to="/detalle">
                        <img src={imagen} onClick={() =>  setIdPk(id) } />
                    </Link>
                    :

                    <img src={imagen} />
            }



        </div>

    )

}


export default connect(null, { setIdPk })(Tarjeta);
