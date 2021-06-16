import React from "react";//esto
import { Link } from 'react-router-dom';//si precise routing

import './Landing.css'; //hoja de estilos


//SE EJCUTA CUANDO COMPILAS O CUANDO TOCAS F5 Y NADA
//SET TUPES, SEYTPOKEM

export default function () {

    //SE EJCUTA CUANDO VOLES A LA RU, CUANDO ACUTALIZ, COMOA, Y CUAND SE ACTUALIZA ELE STO
    return (
        <div>

            <image src="https://static.wikia.nocookie.net/eswikia/images/d/df/Pok%C3%A9mon.png"/>

            <Link to="/principal">
                <button>Principasl</button>
            </Link>
        </div>
    )

}


