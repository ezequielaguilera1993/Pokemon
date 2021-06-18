const { Pokemon, Types } = require("../db")
const { Router } = require('express');
const { Op } = require("sequelize");
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
  let body = req.body
  console.log(body.typesId)
  const pokemonFindOrCreated = await Pokemon.findOrCreate({
    //el create inserta el valor en la tabla, en category
    where: {
      name: body.name //si esta este devolvemelo, sino crealo, junto con lo que esta abajo
    }
    ,
    defaults: {
      ...body.defaults,
      idPokemonCreado: "db" + (++idPokemonCreados),
    }
  })



  let flagCreate = pokemonFindOrCreated[1]

  if (flagCreate) {

    //Busco mis types

    let tiposEncontrados = await Types.findAll({
      where: {
        [Op.or]: [{ id: body.typesId[0] }, { id: body.typesId[1] }]
      }
    })

    await pokemonFindOrCreated[0].addTypes(tiposEncontrados)


    let pokemones = await Pokemon.findAll({
      where: { name: body.name },
      include: Types
    })

    let {
      name,
      idPokemonCreado,
      vida,
      fuerza,
      defensa,
      velocidad,
      altura,
      peso,
      imagen
    } = pokemones[0]

    let types = pokemones[0].Types.map(e => e.type)



    res.json({
      types,
      name,
      idPokemonCreado,
      vida,
      fuerza,
      defensa,
      velocidad,
      altura,
      peso,
      imagen
    })

  }


  else res.status(404).json({ flag: true, info: "Pokemon ya existente!!" })

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