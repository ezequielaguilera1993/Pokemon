
import React from "react";//esto
import { Link } from 'react-router-dom';//si precise routing
import './Landing.css'; //hoja de estilos
import store from '../../store'
import { setTypes, addPokemons, process } from "../../actions"//actions
const axios = require("axios").default //para no tener que esta accediendo al default tood el tiempo

async function refresh() {
    /////REFRESH///////
    await axios.put("http://localhost:3001/pokemons").then((e) => {
        console.log("refresh de db exitoso")
    })
//

    //CUANDO ESTOS DOS SE VALORIZAN, RECIEN AHI APARECE EL BOTON
    /////GET_TYPES/////
     axios.get("http://localhost:3001/types").then((t) => {
        console.log("get_types exitoso")
        store.dispatch(setTypes(t.data))//en data esta el objeto!!
    })

    //ADD_POKES, TRAE DE A 12 POKEMONS //cuando llega a 40 y el types se carga habilita la pagina
    let arrayPromises = []
    for (let i = 1; i <= 4; i++) {
        arrayPromises.push(axios.get("http://localhost:3001/pokemons"))
    }
    Promise.all(arrayPromises).then(arrayPromisesResueltas => {
        arrayPromisesResueltas.forEach((e) => {
            store.dispatch(addPokemons(e.data.docePokemonos)) //en data esta el objeto!!
            console.log("get pokemons exitoso", e.data.docePokemonos)
        })
    })
}

refresh()





export default function () {

    //SE EJCUTA CUANDO VOLES A LA RU, CUANDO ACUTALIZ, COMOA, Y CUAND SE ACTUALIZA ELE STO
    return (
        <div>
            {/* <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/02/23/16140823976294.jpg" /> */}
            <img src='https://i.imgur.com/045QeXT.jpg'/>

            <Link to="/principal">
                <button>••••••• Principal •••••••</button>
            </Link>
        </div>
    )

}


