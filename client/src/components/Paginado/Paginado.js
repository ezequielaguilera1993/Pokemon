import React, { Component, useEffect, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { setPunteros } from "../../actions"//actions

import './Paginado.css'; //hoja de estilos


function Paginado({ setPunteros, toShowPokes }) {

  let p1 = 0
  let p2 = 6

  useEffect(() => setPunteros([0, 6]))

  let toShow = toShowPokes.length
  let numeroDePaginas = Math.ceil(toShow / 6)
  function handlePaginado(e) {

    if (toShow >= 6) {
      let name = e.target.name

      if (name === "atras" && p1 !== 0) { p1 -= 6; p2 -= 6; setPunteros([p1, p2]) }
      if (name === "adelante" && p2 !== 42) { p1 += 6; p2 += 6; setPunteros([p1, p2]) }


      else if (name.length === 1) {
        let numberName = parseInt(name)
        { p1 = (numberName - 1) * 6; p2 = numberName * 6; setPunteros([p1, p2]) }
      }
    }
  }


  return (<div id="paginado">

    <button name="atras" onClick={handlePaginado}>ATRAS</button>

    {
      ((numeroDePaginas) => {
        let htmls = []

        for (let i = 1; i <= numeroDePaginas; i++) {
          htmls.push(<button key={i} name={i} onClick={handlePaginado}>{i}</button>)
        }

        return htmls

      })(numeroDePaginas)
    }


    <button name="adelante" onClick={handlePaginado}>ADELANTE</button>

  </div>
  )

}

function mapeoState(state) {
  return {
    toShowPokes: state.toShowPokes,
  }
}

export default connect(mapeoState, { setPunteros })(Paginado);





