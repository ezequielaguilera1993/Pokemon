const { Pokemon, Types } = require("../db")
const { Router } = require('express');

const router = Router()

var idPokemonCreados = 0
//CON UN UUID LA KEY LA CREA EL CLIENTE Y LA MANDA
//DE ANTEMANO PODES SABER QUE SE VA A GUARDAR EN EL SERVIDOR
//SE HACEN TIPOS DE DATOS ESPECIFICOS, PARA NO USAR CADENAS (DEPENDE QUE SISTEMA)

//MAYOR GASTRO PROCEDURAL
//INEFECTIVA CUANDO ES DE VIDA O MUERTE, A MENOS QUE SE USE COMPROBACION DE UNICIDAD
//UUID NO SE PUEDE ORDENAR
//EN TABLAS DE MUCHISIMOS DATOS SE SUELEN USAR UUIDs

router.post("/", async function (req, res) {
  //esto lo crea, sino te devuelve un array con los que encontro
  const pokemonFindOrCreated = await Pokemon.findOrCreate({
    //el create inserta el valor en la tabla, en category
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
    }
  })

  

  let flagCreate = pokemonFindOrCreated[1]/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");

  const typeDeEstePokemon = await Types.findByPk(11)

  await pokemonFindOrCreated[0].setTypes(typeDeEstePokemon)

  if (flagCreate) {
    Pokemon.findAll({   include: Types })
      .then((result) => {
        const { idPokemonCreado, name, imagen, fuerza, Types} = result[0]
        res.json({
          cuantosHay: result.length, pokemonCreado: {idPokemonCreado,name, imagen, fuerza, types:Types[0].type}, db: idPokemonCreados
        })
      })
  }
  else res.status(404).send("Pokemon ya existente!!")


})



module.exports = router
/*   const claveTypes = {
      1: "normal",
      2: "fighting",
      3: "flying",
      4: "poison",
      5: "ground",
      6: "rock",
      7: "bug",
      8: "ghost",
      9: "steel",
      10: "fire",
      11: "water",
      12: "grass",
      13: "electric",
      14: "psychic",
      15: "ice",
      16: "dragon",
      17: "dark",
      18: "fairy",
      19: "unknown",
      20: "shadow"
    } */