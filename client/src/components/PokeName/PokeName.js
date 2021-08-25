import axios from "axios";
import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { busquedaPokename } from "../../actions"//actions
import styles from './PokeName.module.css'; import { BACKEND_URL } from "../../util";

function PokeName({ busquedaPokename }) {

  const [dato, setDato] = React.useState("")

  const handleChange = (e) => {
    setDato(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let datoEnviado = dato
    if (dato === "") { datoEnviado = "_" }

    axios.get(BACKEND_URL() + "/pokemons?pokeName=" + datoEnviado).then(

      (res) => busquedaPokename(res.data)


    )



  }


  return (

    <div id={styles.pokeName}>
      {/* <div style={{ backgroundColor: "#000000bb", borderRadius: "10px", width: "fit-content", padding: "0px 10px 0px 10px", marginTop: "10px" }}>Buscar pokémon por nombre</div> */}

      <form onSubmit={handleSubmit} >
        <input value={dato} onChange={handleChange} placeholder="Buscar por nombre" name="busqueda" style={{ textAlign: "center" }} />
      </form>
    </div>

  )

}



export default connect(null, { busquedaPokename })(PokeName);

