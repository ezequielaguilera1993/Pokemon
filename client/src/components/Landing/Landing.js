
import React from "react";//esto
import { Link } from 'react-router-dom';//si precise routing
import './Landing.css'; //hoja de estilos
import store from '../../store'
import {setTypes, addPokemons, process} from "../../actions"//actions
const axios = require("axios").default //para no tener que esta accediendo al default tood el tiempo
console.clear()

async function refresh(){

//REFRESH//////
await axios.put("http://localhost:3001/pokemons").then((e) => {
    console.log("refresh exitoso")
})

//ADD_POKES
await axios.get("http://localhost:3001/pokemons").then((t) => {
    console.log("get pokemons exitoso", t.data.docePokemonos )
     store.dispatch(addPokemons(t.data.docePokemonos)) //en data esta el objeto!!
})


 store.dispatch(process({type:"poison"}))

//SET_TYPES
await axios.get("http://localhost:3001/types").then((t) => {
    console.log("get_types exitoso")
    store.dispatch(setTypes(t.data))//en data esta el objeto!!
})



//PROCESS_POKES


// console.log("termine el async")
}
refresh()
//LO ASYNCRONO ES SOLO LO QUE ESTA ADENTRO, NO PARA LA EJECUCION!!!!
// console.log("marca")


export default function () {

    //SE EJCUTA CUANDO VOLES A LA RU, CUANDO ACUTALIZ, COMOA, Y CUAND SE ACTUALIZA ELE STO
    return (
        <div>
            <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/02/23/16140823976294.jpg" />

            <Link to="/principal">
                <button>••••••• Principal •••••••</button>
            </Link>
        </div>
    )

}


