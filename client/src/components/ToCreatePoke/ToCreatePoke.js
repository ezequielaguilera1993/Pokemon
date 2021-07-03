import React, { Component, useState } from "react";//esto
import { Link } from 'react-router-dom';//si precise routing
import './ToCreatePoke.css'; //hoja de estilos
import { process, setPunteros } from "../../actions"//actions
import { connect } from "react-redux";//y esto para conectarlo con redux

function ToCreatePoke() {
    process({})
    setPunteros([0, 6])

    return <Link to="/createPoke"><button>Crear Pokémon!</button></Link>


}



export default connect(null, { process, setPunteros })(ToCreatePoke);


