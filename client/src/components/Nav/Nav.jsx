import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { process } from "../../actions";
import Busqueda from "../Busqueda/Busqueda";
import Paginado from "../Paginado/Paginado";
import PokeName from "../PokeName/PokeName";
import ToCreatePoke from "../ToCreatePoke/ToCreatePoke";
import Styles from "./Nav.module.css";

export function Nav({ process, types, toShowPokes }) {
  return (
    <div id={Styles.nav}>
      <div id={Styles.Busqueda}>
        <Busqueda />
      </div>

      <div id={Styles.Paginado}></div>
    </div>
  );
}
