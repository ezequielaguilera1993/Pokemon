import React, { Component, useEffect, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { addMovieFavorite, setPokeDetalle } from "../../actions"//actions
import './PokeDetalle.css'; //hoja de estilos
const axios = require("axios").default //para no tener que esta accediendo al default tood el tiempo


/* 
[ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
[ ] Número de Pokemon (id)
[ ] Estadísticas (vida, fuerza, defensa, velocidad)
[ ] Altura y peso 
*/
function PokeDetalle({ idPkPulsado, pokeDetalle, setPokeDetalle }) {

  useEffect(() => {
    axios.get("http://localhost:3001/pokemons/" + idPkPulsado).then((res) => {
      setPokeDetalle(res.data)
    })
  }, [])




  let a = {
    "id": 1,
    "name": "bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "vida": 45,
    "fuerza": 49,
    "defensa": 65,
    "velocidad": 45,
    "altura": 7,
    "peso": 69
  }

  return (
    <div>
      {
        Object.entries(pokeDetalle).map((e) => {
          let clave = e[0]
          let valor= e[1]
          return (
            clave === "id" ?
              <div>Numero de Pokemon {">>"}  {valor}</div>
              :
              clave==="imagen"?
              <img src={valor}/>
              :
              <div>{clave[0].toUpperCase() + clave.slice(1)}  {">>"}   {valor}</div>
          )


        })
      }
    </div>
  )


}


function mapeoState(state) {

  return {
    idPkPulsado: state.idPkPulsado,
    pokeDetalle: state.pokeDetalle
  }

}


export default connect(mapeoState, { setPokeDetalle })(PokeDetalle);