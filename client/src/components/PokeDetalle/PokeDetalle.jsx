import React, { Component, useEffect, useState } from "react"; //esto
import { connect } from "react-redux"; //y esto para conectarlo con redux
import { useParams } from "react-router-dom";
import { addMovieFavorite, setPokeDetalle } from "../../actions"; //actions
import Styles from "./PokeDetalle.module.css"; //hoja de estilos

const axios = require("axios").default; //para no tener que esta accediendo al default tood el tiempo

function PokeDetalle({ pokeDetalle, setPokeDetalle, match }) {
  let idPokemon = match.params.idPokemon;

  useEffect(async () => {
    axios
      .get("http://localhost:3001/pokemons/" + idPokemon)
      .then(async (res) => {
        setPokeDetalle(res.data);
      });
  }, []);

  return (
    <div id={Styles.container}>
      {pokeDetalle.name ? (
        <div>
          <div style={{ fontSize: "3rem" }}>
            {"✨" +
              pokeDetalle.name[0].toUpperCase() +
              pokeDetalle.name.slice(1) +
              "✨"}
          </div>

          <div>
            (
            {pokeDetalle?.types
              .map((e) => e[0].toUpperCase() + e.slice(1))
              .join(" - ")}
            )
          </div>

          <img key={pokeDetalle.imagen} src={pokeDetalle.imagen} />

          <div id={Styles.minorDetails}>
            {Object.entries(pokeDetalle).map((e) => {
              let clave = e[0];
              let valor = e[1];
              return !"id/name/types/imagen/idPokemonCreado".includes(clave) ? (
                <div key={clave}>
                  {"✨"}
                  {clave === "name"
                    ? "Nombre"
                    : clave[0].toUpperCase() + clave.slice(1)}
                  {"✨"} <br /> {valor}
                  <br />
                  <br />
                </div>
              ) : null;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function mapeoState(state) {
  return {
    pokeDetalle: state.pokeDetalle,
  };
}

export default connect(mapeoState, { setPokeDetalle })(PokeDetalle);

/* clave === "id" ? (
          <div key="id">
            {"✨"}Numero de Pokemon{"✨"} <br /> {valor}
            <br /> <br />{" "}
          </div>
        ) : clave === "idPokemonCreado" ? (
          <div key="id">
            {"✨"}Numero de Pokemon{"✨"}
            <br />
            {valor} (pokemon creado) <br />
            <br />
          </div>
        ) :  */
