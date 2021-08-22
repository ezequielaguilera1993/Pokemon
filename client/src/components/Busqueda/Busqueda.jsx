import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { process } from "../../actions";
import "./Busqueda.css";
import { capitalCase } from "../../util";
function Busqueda({ process, types, toShowPokes }) {
  const [optionObj, setOptionObj] = useState({
    order: "",
    type: "",
    dbPokesOnly: false,
  });

  function handleProcess(e) {
    let obj;
    if (typeof e.target.checked === "boolean")
      obj = { ...optionObj, [e.target.name]: e.target.checked };
    else obj = { ...optionObj, [e.target.name]: e.target.value };
    setOptionObj(obj);

    process(obj);
  }

  return (
    <div id="busqueda">
      <div
        style={{
          backgroundColor: "#000000bb",
          borderRadius: "10px",
          fontSize: "1.7rem",
        }}
      >
        Ordenar
      </div>

      <div>
        <button name="order" value="mayor_a_menor" onClick={handleProcess}>
          Mas fuertes primero
        </button>
      </div>

      <div>
        <button name="order" value="menor_a_mayor" onClick={handleProcess}>
          Débiles primero
        </button>
      </div>

      <div>
        <button name="order" value="A_Z" onClick={handleProcess}>
          De la A a la Z
        </button>
      </div>

      <div>
        <button name="order" value="Z_A" onClick={handleProcess}>
          De la Z a la A
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#000000bb",
          borderRadius: "10px",
          marginTop: "1vh",
          fontSize: "1.7rem",
        }}
      >
        Filtrar
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label> ♦ Por tipo </label>
          <select
            name="type"
            onChange={handleProcess}
            style={{ height: "fit-content", padding: "0px", margin: "0px" }}
          >
            {types.map((e) => (
              <option key={capitalCase(e.type)}>{capitalCase(e.type)}</option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label> ♦ Solo pokemons creados </label>
          <input
            style={{
              width: "25px",
              height: "25px",
              margin: 0,
              marginBottom: "-1vh",
            }}
            name="dbPokesOnly"
            type="checkbox"
            onClick={handleProcess}
          />
        </div>
      </div>
    </div>
  );
}

function mapsState(state) {
  return {
    types: state.types,
    toShowPokes: state.toShowPokes,
  };
}

export default connect(mapsState, { process })(Busqueda);
