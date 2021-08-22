const axios = require("axios").default //para no tener que esta accediendo al default tood el tiempo
const { Router } = require('express');
const { conn, Pokemon, Types } = require('../db');
const router = Router()

let pokemonBuffer = []
let peticion = true
//DEJA TODO A CERO
router.put("/", (req, res) => {
    pokemonBuffer = []//limpia el buffer
    peticion = true
    conn.sync({ force: true }).then(() => res.send("resfresh exitoso")) //refresca las tablas
})

//TRAE 40 POKEMONES, y luego los envia de a 12 cada vez que le piden
router.get("/", async function (req, res) {

    const pokeName = req.query.pokeName

    //SIN POKENAME
    if (pokeName === undefined) {    //RUTA A SECAS, ENTONCES PIDE LOS 40


        //PETICION
        if (peticion) {
            peticion = false
            let arrayPromesas = []

            for (let i = 1; i <= 40; i++) {
                arrayPromesas.push(axios.get("https://pokeapi.co/api/v2/pokemon/" + i))
            }

            await Promise.all(arrayPromesas)
                .then(arrayPromesasResueltas => {

                    arrayPromesasResueltas.forEach((result => {
                        let pokemon = result.data
                        pokemonBuffer.push({
                            id: pokemon.id,
                            name: pokemon.name,
                            types: pokemon.types.map((e) => e.type.name),
                            imagen: pokemon.sprites.other["official-artwork"].front_default,
                            fuerza: pokemon.stats[1].base_stat

                        }
                        )
                    }
                    )
                    )

                }
                )
                .catch(error => res.status(500).json({ error: "Ups! Pedido" }))


        }
        //

        res.json({ docePokemonos: pokemonBuffer.splice(0, 12), cuantosQuedan: pokemonBuffer.length })



    }


    else if (pokeName) {  //si envian una solicitud d nombre le devuelve el pokemon con el nombre

        let pokeDb = await Pokemon.findAll({
            where: { name: pokeName }, include: Types
        })


        if (pokeDb.length !== 0) {

            pokeDb = pokeDb[0].dataValues

            res.json({
                name: pokeDb.name,
                types: pokeDb.Types.map((e) => e.type),
                fuerza: pokeDb.fuerza,
                imagen: "null",
                id: pokeDb.idPokemonCreado
            })
        }

        else {

            /* 
                        pokeName = await Pokemon.findOne({
                            where: {name},
                            include:{
                                    model: Type,
                                    attributes:['name']
                                    }
                                }) */



            axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeName)

                .then(response => {

                    let pokemon = response.data

                    res.json({
                        name: pokemon.name,
                        types: pokemon.types.map((e) => e.type.name),
                        imagen: pokemon.sprites.other["official-artwork"].front_default,
                        fuerza: pokemon.stats[1].base_stat,
                        id: pokemon.id

                    })
                })

                .catch(() => res.json(
                    {
                        name: "Pokemon no encontrado",
                        types: [],
                        fuerza: "",
                        id: "",
                        imagen: "https://pm1.narvii.com/6121/2985db5e175084c069f3cab12a9afb5a896ee276_hq.jpg"
                    }
                ))
        }


    }


})


/* name: "Pokemon no encontrado",
                    types: [],
                    fuerza: "",
                    id: "",
                   imagen: "https://pm1.narvii.com/6121/2985db5e175084c069f3cab12a9afb5a896ee276_hq.jpg", /* descripcion:error.stack  */


module.exports = router



