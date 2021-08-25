import React, { Component, useState } from "react"; //esto
import { connect } from "react-redux"; //y esto para conectarlo con redux
import { Link } from "react-router-dom"; //si precise routing

import Styles from "./Tarjeta.module.css"; //hoja de estilos
import { capitalCase } from "../../../util";

function Tarjeta({ name, types, imagen, fuerza, id, idPokemonCreado }) {
  const [havePokemon, ªhavePokemon] = useState(false);

  let imgTarjeta =
    id || idPokemonCreado ? (
      <Link to={"/detalle/" + id}>
        <img
          id={Styles.img}
          src={imagen}
          height="70%"
          // style={{ objectFit: "fill" }}
        />
      </Link>
    ) : (
      <img
        src={imagen}
        height="74%"
        style={{ objectFit: "contain", borderRadius: "1rem", marginTop: "2vh" }}
      />
    );

  return (
    <div id={Styles.tarjeta}>
      <div style={{ fontSize: "35px" }}>{capitalCase(name)}</div>
      {name !== "No encontrado" ? (
        <div>
          {types.length === 1 ? (
            <div>Tipo: {capitalCase(types)}</div>
          ) : (
            <div>Tipos: {capitalCase(types).join(", ")}</div>
          )}

          <div>Fuerza: {fuerza} </div>
        </div>
      ) : null}

      {imgTarjeta}
    </div>
  );
}

export default connect(null)(Tarjeta);
