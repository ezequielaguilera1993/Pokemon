import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { process } from "../../actions";
import Busqueda from "../Busqueda/Busqueda";
import Paginado from "../Paginado/Paginado";
import PokeName from "../PokeName/PokeName";
import Styles from "./Nav.module.css";

export function Nav({ process, types, toShowPokes }) {
  return (
    <div id={Styles.nav}>
      <PokeName />
    </div>
  );
}
