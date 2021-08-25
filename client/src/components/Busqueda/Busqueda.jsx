import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { process } from "../../actions";
import "./Busqueda.css";
import { capitalCase } from "../../util";
import { BACKEND_URL } from "../../util";
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
          fontSize: "1.3rem",
          textAlign: "center",
          verticalAlign: "center",
          paddingTop: ".3rem",
          height: "1.2rem",
          marginBottom: ".3vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          fontSize: "1.3rem",
          textAlign: "center",
          verticalAlign: "center",
          paddingTop: ".3rem",
          height: "1.2rem",
          marginBottom: ".0vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1vh",
        }}
      >
        Filtrar
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "black",
            margin: ".2vmax",
            borderRadius: "7px",
            boxShadow: "0 0 0.5rem .05rem ",
            padding: ".3vh .4vw" /* , flexDirection: "column" */,
            width: "fit-content",
            background:
              "url(https://st2.depositphotos.com/3769671/7957/v/600/depositphotos_79574646-stock-illustration-paper-texture-template.jpg)",
          }}
        >
          <label style={{ marginRight: ".3vmax", fontSize: "1.2rem" }}>
            Por tipo
          </label>

          <select
            name="type"
            onChange={handleProcess}
            style={{
              height: "fit-content",
              padding: "0px",
              margin: "0px",
              outline: "none",
            }}
          >
            {types.map((e) => (
              <option key={capitalCase(e.type)}>{capitalCase(e.type)}</option>
            ))}
          </select>
        </div>

        <div
          style={{
            backgroundColor: "rgb(226, 226, 226)",
            color: "black",
            margin: ".2vmax",
            padding: ".0vh .1vw" /* , flexDirection: "column" */,
            paddingBottom: ".3vh" /* , flexDirection: "column" */,
            borderRadius: "7px",
            boxShadow: "0 0 0.5rem .05rem ",
            background:
              "url(https://st2.depositphotos.com/3769671/7957/v/600/depositphotos_79574646-stock-illustration-paper-texture-template.jpg)",
          }}
        >
          <label
            style={{
              marginRight: ".6vmax",
              fontSize: "1.2rem",
              lineHeight: "3.4vh",
            }}
          >
            Solo agregados
          </label>
          <input
            style={{
              width: "25px",
              height: "25px",
              margin: 0,
              marginBottom: "-1vh",
              position: "relative",
              top: ".45vh",
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
