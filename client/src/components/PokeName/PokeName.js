import axios from "axios";
import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { busquedaPokename } from "../../actions"//actions
import './PokeName.css'; //hoja de estilos

function PokeName({ busquedaPokename }) {

  const [dato, setDato] = React.useState("")

  const handleChange = (e) => {
    setDato(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let datoEnviado = dato
    if (dato === "") { datoEnviado = "_" }

    axios.get("http://localhost:3001/pokemons?pokeName=" + datoEnviado).then(

      (res) => busquedaPokename(res.data)


    )



  }


  return (

    <div>

      <form >
        <input value={dato} onChange={handleChange} placeholder="Ingresar nombre de pokemon" name="busqueda" /> <button onClick={handleSubmit}>Buscar por nombre </button>
      </form>


    </div>

  )

}



export default connect(null, { busquedaPokename })(PokeName);

