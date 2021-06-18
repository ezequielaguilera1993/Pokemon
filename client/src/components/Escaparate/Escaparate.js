import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import Tarjeta from "./Tarjeta/Tarjeta";
import './Escaparate.css'; //hoja de estilos


function Escaparate({ toShowPokes, punteros}) { //
  const [p1, p2] = punteros

  return (
    <div>

      {toShowPokes.slice(p1, p2).map((e) => {

        const { name, types, imagen, fuerza, id , idPokemonCreado} = e

        return <Tarjeta key={id} name={name} types={types} imagen={imagen} fuerza={fuerza} id={id} idPokemonCreado={idPokemonCreado}/>

      })}






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

