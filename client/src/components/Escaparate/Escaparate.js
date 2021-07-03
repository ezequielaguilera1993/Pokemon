import React, { Component, useState, useEffect } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import Tarjeta from "./Tarjeta/Tarjeta";
import styles from './Escaparate.module.css'; //hoja de estilos


let once = 1


function Escaparate({ toShowPokes, punteros }) { //
  const [p1, p2] = punteros

  let toShowtargets=toShowPokes.slice(p1, p2).map((e) => {
    const { name, types, imagen, fuerza, id, idPokemonCreado } = e
    return <Tarjeta  key={id} name={name} types={types} imagen={imagen} fuerza={fuerza} id={id} idPokemonCreado={idPokemonCreado} />
  })
  /*  const handleOnClickUp = () => play();
  handleOnClickUp()
  */


  useEffect(() => {
    if (once) {
      once--
      let audio = document.getElementById("asd2")
      audio.play()
    }
  }, [])


  return (
    <div id={styles.escaparate}>

      <audio id="asd2" style={{ display: "none" }} controls>
        <source
          src="https://docs.google.com/uc?export=download&id=1KASTwPkpSjkB0uM113MG5bYnj8plmKAP"
          type="audio/mpeg"
        />
      </audio>

      <div id={styles.toShowPokes}>
        {toShowtargets}
      </div>

    </div >
  )
}

function mapeoState(state) {
  return {
    toShowPokes: state.toShowPokes,
    punteros: state.punteros
  }
}

export default connect(mapeoState)(Escaparate);