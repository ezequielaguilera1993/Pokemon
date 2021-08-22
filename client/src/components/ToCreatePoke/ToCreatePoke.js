import React, { Component, useState } from "react";//esto
import { Link } from 'react-router-dom';//si precise routing
import Styles from './ToCreatePoke.modules.css'; //hoja de estilos
import { process, setPunteros } from "../../actions"//actions
import { connect } from "react-redux";//y esto para conectarlo con redux

function ToCreatePoke() {
    process({})
    setPunteros([0, 6])

    return <div id={Styles.createPoke}>
        <img src="https://i.imgur.com/a7Zd2GU.png" />
        <Link to="/createPoke"><button>Crear Pokémon!</button></Link>
    </div>


}



export default connect(null, { process, setPunteros })(ToCreatePoke);


