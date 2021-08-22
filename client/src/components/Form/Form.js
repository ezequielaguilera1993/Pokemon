import axios from "axios";
import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { addCreated, } from "../../actions"//actions
import styles from './Form.module.css'; //hoja de estilos
import { capitalCase } from "../../util";

export function validate(input) {
  let errors = {
  }

  if (!input.name) {
    errors.name = 'name is required';
  }

  if (!input.vida) {
    errors.vida = 'vida is required';
  }

  if (!input.fuerza) {
    errors.fuerza = 'fuerza is required';
  }

  if (!input.defensa) {
    errors.defensa = 'defensa is required';
  }

  if (!input.velocidad) {
    errors.velocidad = 'velocidad is required';
  }

  if (!input.altura) {
    errors.altura = 'altura is required';
  }

  if (!input.peso) {
    errors.peso = 'peso is required';
  }

  if (!input.imagen) {
    errors.imagen = 'imagen is required';
  } else if (!/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(input.imagen)) {
    errors.imagen = 'imagen is invalid';
  }



  return errors;


};


function Form({ addCreated, types }) {

  let [pokedata, setPokedata] = useState({
    name: 'MoriartyIII',
    vida: 2000,
    fuerza: 21,
    defensa: 32,
    velocidad: 21,
    altura: 12,
    peso: 12,
    imagen: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
    typesId: ["normal"],
  })


  function handleSubmit(e) {
    e.preventDefault()
    //aca hago el axios para cargarlo la espero y despues hago el action
    let { name, typesId, ...defaults } = pokedata
    // let sendObj = { name, typesId: giveMeIds(typesId), defaults }
    // console.log(name, typesId, altura, defensa, fuerza, imagen, peso, velocidad, vida)
    typesId = giveMeIds(typesId)
    axios.post("http://localhost:3001/pokemons",
      {
        defaults: { ...defaults },
        name,
        typesId,
      }
    )
      .then(response => {
        console.log("response data", response.data)

        const { name, types, imagen, fuerza, defaults, id } = response.data

        addCreated({ name, types, imagen, fuerza, defaults, id })
      })
      .catch(e => {
        alert("Ya tenés a ese pokemon");
      });


  }


  let [errors, setErrors] = useState({})

  function handleOnChange(e) {


    let parseo = parseInt(e.target.value)
    let value = e.target.value


    // if (parseo.toString() !== "NaN") { value = parseo }
    console.log(!!e.target.value)
    if (parseo.toString() !== "NaN" && e.target.value && e.target.name !== "name" && e.target.name !== "imagen") { value = parseo }

    var objError = validate({
      ...pokedata,
      [e.target.name]: value
    })

    setErrors(objError)

    setPokedata({
      ...pokedata,
      [e.target.name]: value
    })

  }

  console.log(pokedata)

  function handleOnCheck(e) {
    let name = e.target.name
    let checked = e.target.checked
    let newId = pokedata.typesId

    if (checked) {
      if (!newId.includes(name)) {
        newId.push(name)
      }
    }

    else {
      newId = newId.filter((e) => e !== name)
    }

    setPokedata({
      ...pokedata,
      typesId: newId
    })

  }


  return (
    <div>
      <form>
        <div>  <strong>Nombre</strong>    <input className={errors.name ? styles.require : styles.allOk} value={pokedata.name} onChange={handleOnChange} name="name" placeholder="Nombre" /></div>
        <div>  <strong>Vida</strong>    <input className={errors.vida ? styles.require : styles.allOk} value={pokedata.vida} onChange={handleOnChange} name="vida" placeholder="Vida" /></div>
        <div>  <strong>Fuerza</strong>    <input className={errors.fuerza ? styles.require : styles.allOk} value={pokedata.fuerza} onChange={handleOnChange} name="fuerza" placeholder="Fuerza" /></div>
        <div>  <strong>Defensa</strong>    <input className={errors.defensa ? styles.require : styles.allOk} value={pokedata.defensa} onChange={handleOnChange} name="defensa" placeholder="Defensa" /></div>
        <div>  <strong>Velocidad</strong>    <input className={errors.velocidad ? styles.require : styles.allOk} value={pokedata.velocidad} onChange={handleOnChange} name="velocidad" placeholder="Velocidad" /></div>
        <div>  <strong>Altura</strong>    <input className={errors.altura ? styles.require : styles.allOk} value={pokedata.altura} onChange={handleOnChange} name="altura" placeholder="Altura" /></div>
        <div>  <strong>Peso</strong>    <input className={errors.peso ? styles.require : styles.allOk} value={pokedata.peso} onChange={handleOnChange} name="peso" placeholder="Peso" /></div>
        <div>  <strong>Imagen</strong>    <input className={errors.imagen ? styles.require : styles.allOk} value={pokedata.imagen} onChange={handleOnChange} name="imagen" placeholder="Imagen" /></div>

        <div id={styles.typesList}>
          {
            types.map(e =>

              <div key={e.type}>
                <label>{capitalCase(e.type)}</label>


                <input checked={

                  pokedata.typesId.includes(e.type) ?
                    true
                    :
                    false

                } name={e.type} onChange={handleOnCheck} type="checkbox" />

              </div>

            )

          }
        </div>
        <button clasename={Object.keys(errors) > 0 ? "butonError" : ""} onClick={handleSubmit}>CREAR 💌</button> {Object.keys(errors) > 0 ? <label>Formulario con campos vacios!</label> : ""}
      </form>
    </div>

  )

}


///SOLO SI TIENE QUE LEER EL ESTADO
function mapeoState(state) {
  return {
    types: state.types
  }
}


export default connect(mapeoState, { addCreated, })(Form);


/*
where: {
  name: "culomon1" //si esta este devolvemelo, sino crealo, junto con lo que esta abajo
}
,
defaults: {
  idPokemonCreado: "db" + (++idPokemonCreados),
  vida: 2000,
  fuerza: 21,
  defensa: 32,
  velocidad: 21,
  altura: 12,
  peso: 12,
  imagen: null
  types:1
} */
function giveMeIds(array) {
  let obj = {
    "normal": 1,
    "fighting": 2,
    "flying": 3,
    "poison": 4,
    "ground": 5,
    "rock": 6,
    "bug": 7,
    "ghost": 8,
    "steel": 9,
    "fire": 10,
    "water": 11,
    "grass": 12,
    "electric": 13,
    "psychic": 14,
    "ice": 15,
    "dragon": 16,
    "dark": 17,
    "fairy": 18,
    "unknown": 19,
    "shadow": 20,
  }

  array = array.reduce((acc, element) => {

    if (obj[element]) {
      acc.push(obj[element]); return acc
    }

    return acc
  }, []);

  return array

}