const axios = require("axios").default //para no tener que esta accediendo al default tood el tiempo
const { Router } = require('express');
const { Pokemon, Types } = require("../db")

const router = Router()

/* 
- Obtener el detalle de un pokemon en particular
- Debe traer solo los datos pedidos en la ruta de detalle de pokemon
- Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
 */

router.get("/:id", async function (req, res) {

    const pokeId = req.params.id //llega como STRING!!

    // console.log(pokeId, "aca");
    if (pokeId.slice(0, 2) == "db") {

        let pokeDb = await Pokemon.findByPk(pokeId, { include: Types })
        if (pokeDb) {
            //Procesado para el front//
            pokeDb = pokeDb.dataValues //se queda solo con el dataValues
            pokeDb.types = pokeDb.Types.map(e => e.type)//crea el tipes a partir del Types
            { ["createdAt", "updatedAt", "Types"].forEach(e => delete pokeDb[e]) }//elimina lo que sobra
            console.log("||||", pokeDb)
            //////////////////////////
            res.json(pokeDb)
        }
        else res.json("Pokemon no encontrado")

    }

    else {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeId)

            .then(response => {

                let pokemon = response.data
                let estadisticas = pokemon.stats

                res.json({
                    id: pokemon.id,
                    name: pokemon.name,
                    types: pokemon.types.map((e) => e.type.name),
                    imagen: pokemon.sprites.other["official-artwork"].front_default,

                    vida: estadisticas[0].base_stat,
                    fuerza: estadisticas[1].base_stat,
                    defensa: estadisticas[3].base_stat,
                    velocidad: estadisticas[5].base_stat,

                    altura: pokemon.height,
                    peso: pokemon.weight,
                })
            })

            .catch(error => res.status(500).json({ error: "Ups!Id", er: error.stack }))
    }

    /* pokemon.sprites.other.official-artwork.front_default */

})


module.exports = router