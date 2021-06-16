import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux

import { Link } from 'react-router-dom';//si precise routing
import { getMovies, addMovieFavorite } from "../../actions"//actions

import './ToPrincipal.css'; //hoja de estilos




export default function () {

    return (<Link to="/principal"><button>back</button></Link>

    )
}


/*  <Link to="/">
        <button>BackToPrincipal</button>
    </Link> */