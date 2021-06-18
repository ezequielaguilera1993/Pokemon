import axios from "axios";
import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { addCreated, } from "../../actions"//actions
import './Form.css'; //hoja de estilos


function Form({ addCreated, types }) {

  let [pokedata, setPokedata] = useState({
    name: 'MoriartyIII',
    defaults: {
      vida: 2000,
      fuerza: 21,
      defensa: 32,
      velocidad: 21,
      altura: 12,
      peso: 12,
      imagen: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg'
    },
    typesId: [1, 2]
  })


  function handleSubmit(e) {
    //aca hago el axios para cargarlo la espero y despues hago el action
    e.preventDefault()
    axios.post("http://localhost:3001/pokemons",
      pokedata
    )
      .then(response => {
        console.log(response.data)
          addCreated(response.data)

      })
      .catch(e => {
        alert("Ya tenés a ese pokemon");
      });


  }

  function handleOnChange(e) {

  }


  console.log(types, "types!!")






  return (


    <form>
      <input></input>
      <button onClick={handleSubmit}></button>

    </form>


  )

}


///SOLO SI TIENE QUE LEER EL ESTADO
function mapeoState(state) {
  return {
    types: state.types
  }
}


export default connect(mapeoState, { addCreated, })(Form);


/*
where: {
  name: "culomon1" //si esta este devolvemelo, sino crealo, junto con lo que esta abajo
}
,
defaults: {
  idPokemonCreado: "db" + (++idPokemonCreados),
  vida: 2000,
  fuerza: 21,
  defensa: 32,
  velocidad: 21,
  altura: 12,
  peso: 12,
  imagen: null
  types:1
}
   const claveTypes = {
  1: "normal",
  2: "fighting",
  3: "flying",
  4: "poison",
  5: "ground",
  6: "rock",
  7: "bug",
  8: "ghost",
  9: "steel",
  10: "fire",
  11: "water",
  12: "grass",
  13: "electric",
14: "psychic",
  15: "ice",
  16: "dragon",
  17: "dark",
  18: "fairy",
  19: "unknown",
  20: "shadow"
} */