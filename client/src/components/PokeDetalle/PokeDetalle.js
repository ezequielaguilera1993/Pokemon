import React, { Component, useEffect, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { useParams } from "react-router-dom";
import { addMovieFavorite, setPokeDetalle } from "../../actions"//actions
import './PokeDetalle.css'; //hoja de estilos
const axios = require("axios").default //para no tener que esta accediendo al default tood el tiempo


/* 
[ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
[ ] Número de Pokemon (id)
[ ] Estadísticas (vida, fuerza, defensa, velocidad)
[ ] Altura y peso 
*/

function PokeDetalle({pokeDetalle, setPokeDetalle, match }) {

  let idPokemon = match.params.idPokemon

  useEffect(() => {
    axios.get("http://localhost:3001/pokemons/" + idPokemon).then((res) => {
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
    <div id="detalle">
      <div>{idPokemon}</div>
      {
        Object.entries(pokeDetalle).map((e) => {
          let clave = e[0]
          let valor = e[1]
          return (
            clave === "id" ?
              <div key="id">{"✨"}Numero de Pokemon{"✨"} <br /> {valor}<br /> <br /> </div>
              :
              clave === "idPokemonCreado" ?
                <div key="id">{"✨"}Numero de Pokemon{"✨"}<br />{valor} (pokemon creado)  <br /><br /></div>
                :
                clave === "imagen" ?
                  <img key={clave} src={valor} />
                  :
                  clave === "types" ?
                    <div key={clave}> {"✨"}{clave}{"✨"}<br /> {valor.join(" ")} <br /><br /></div>
                    :
                    <div key={clave}>{"✨"}{clave[0].toUpperCase() + clave.slice(1)}{"✨"} <br />  {valor}<br /><br /></div>
          )


        })
      }
    </div>
  )


}


function mapeoState(state) {

  return {
    pokeDetalle: state.pokeDetalle
  }

}


export default connect(mapeoState, { setPokeDetalle })(PokeDetalle)