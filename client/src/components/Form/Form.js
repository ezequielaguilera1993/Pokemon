/* import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux

import { Link } from 'react-router-dom';//si precise routing
import { getMovies, addMovieFavorite } from "../../actions"//actions

import './Form.css'; //hoja de estilos

/*function ({}){


    return()
    
    } 


///SOLO SI TIENE QUE LEER EL ESTADO
     function mapeoState(state) {
    return {
    }
  }
  
  
export default connect(mapeoState, { actionAlgo <--SOLO SI TIENE QUE MODIFICAR EL ESTADO })();  */ 

////js
/* import React, { useState } from 'react';
export function validate(input) {
  let errors = {
  }
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
 
  if (!input.password) {
    errors.password = 'Password is required'
  }
  else if ((!/(?=.[0-9])/.test(input.password))) {
    errors.password = 'Password is invalid'
  }
  return errors;
};
export default function Form() {
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  }
  )
  const [errors, setErrors] = React.useState({});
  const handleInputChange = (e) => {
const newInput={
  ...input,
  [e.target.name]: e.target.value
}
    setInput(newInput)
    setErrors(validate(newInput))
  }
  return (
    <form>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'} type="text" name="username" onChange={handleInputChange} value={input.username} />
        {errors.username && (
      <p className="danger">{errors.username}</p>
    )}
      </div>
      <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'} type="password" name="password" onChange={handleInputChange} value={input.password} />
        {errors.password && (
      <p className="danger">{errors.password}</p>
    )}
      </div>
    </form>
  )
}

export default function Form() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
var user={string:"hola"}
  return (
      <form>
      <label>Username:</label>
      <input type="text" id="sd" name="username" value={user.string} onChange={
        (e)=> document.getElementById("sd").value="ks"}></input>
      <label>Password:</label>
      <input type="password" name="password" value={password} ></input>
      <button>Submit</button>
    </form>
  )
} */
 
/////fin de js