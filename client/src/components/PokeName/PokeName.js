import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux

import { Link } from 'react-router-dom';//si precise routing
import { getMovies, addMovieFavorite } from "../../actions"//actions

import './PokeName.css'; //hoja de estilos

/*

function ({}){

    return()

    }

///SOLO SI TIENE QUE LEER EL ESTADO
     function mapeoState(state) {
    return {
    }
  }

export default connect(mapeoState, { actionAlgo <--SOLO SI TIENE QUE MODIFICAR EL ESTADO })();

*/