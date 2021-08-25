import React, { Component, useState } from "react";//esto
import { Link } from 'react-router-dom';//si precise routing
import Styles from './ToCreatePoke.modules.css'; //hoja de estilos
import { process, setPunteros } from "../../actions"//actions
import { connect } from "react-redux"; import { BACKEND_URL } from "../../util";

function ToCreatePoke() {
    process({})
    setPunteros([0, 6])

    return (
        <Link to="/createPoke" style={{ textDecoration: "none" }}>
            <div id="create_poke_01">
                <img src="https://i.imgur.com/a7Zd2GU.png" />
                <button style={{
                    boxShadow: "0 0 .vmax white",
                    background: "url(https://st2.depositphotos.com/3769671/7957/v/600/depositphotos_79574646-stock-illustration-paper-texture-template.jpg)"

                }} >Registrar Pokémon!</button>
            </div>

        </Link>
    )


}



export default connect(null, { process, setPunteros })(ToCreatePoke);


