const axios = require("axios").default //para no tener que esta accediendo al default tood el tiempo
const { Router } = require('express');
const { conn, Pokemon, Types } = require('../db');

const router = Router()

let buffer = {
    pokemonBuffer: [],
    masPokemonesPorFavor: "https://pokeapi.co/api/v2/pokemon",
}


router.put("/", (req, res) => {

console.log("|||||||||||")

    buffer = {
        pokemonBuffer: [],
        masPokemonesPorFavor: "https://pokeapi.co/api/v2/pokemon",
    }
    conn.sync({ force: true }).then(() => res.send("resfresh exitoso")) //refresca las tablas
})


router.get("/", async function (req, res) {

    const { pokeName } = req.query

    //SIN POKENAME
    if (pokeName === undefined) {//RUTA A SECAS, ENTONCES PIDE MAS 

        //si no pasaron pokeName se fija si tampoco pasaron morePoke para reiniciar todo, y hace la logica de llamado

        //RUTA A SECAS, si tocas f5 en el landing, el estado cae a cero, pero llama a mas pokemones (LLAMA FUERA DE MODULO PARA QUE LLAME UNA VEZ POR CADA F5 DESDE CUALQUIER LUGAR)
        //Si pasaron la ruta a secas, reinicia todo a cero (es decir cada vez que se actualiza la pagina deja todo a cero) INCLUSIVE LA DATABASE

        ////BUSCA POKEMONES CREADOS Y CREA UN ARRAY SIMPLE PARA ENVIAR A RUTA PRINCIPAL///////////////////////////////
        /* let pokeCreados = await Pokemon.findAll({
            include: Types
        })//array de objetos, que en dataValues tienen el elemento de la tabla


        if (pokeCreados.length != 0) {

            pokeCreados = pokeCreados.map(e => {
                let poke = e.dataValues
                return {
                    id: poke.idPokemonCreado,
                    name: poke.name,
                    types: poke.Types.map(e => e.type), //poke.Types es un array de objetos, que cada uno tiene un type que es el string que busco
                    img: "null"
                }
            })
        } */
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        //ACTUALIZACION DE BUFFER
        /*  buffer = { //
             pokemonBuffer: pokeCreados, //agrega los pokemon creados de la database
             masPokemonesPorFavor: "https://pokeapi.co/api/v2/pokemon", //deja la llamada principal
         }
*/


        //y la ruta a secas en el front, paralelalemte tambien debe reiniciar los punteros para mostrarlos de 0, pero no hace falta que reinicie el estado. Ya que la ruta path de more, SOLO SE EJECUTA SI SE QUEDA SIN VALORES PARA MOSTRAR EN EL ESTADO!! Entonces aprovechamos las peticiones anteriores y reducimos axios redundantes


        //LOGICA DE PETICION (la hace siempre que se pida)
        const { pokemonBuffer, masPokemonesPorFavor } = buffer

        //si es menor a 12 (los que estan en la database como va a buscar 20 mas 

        if (pokemonBuffer.length < 12) { //Si hay menos de 12 realiza la peticion (entre creados + lo que agregue despues, en la primear llamada se ejecuta siempre, a menos que vayamos directo a agregar pokemons a creatPokemons y luego volvamos, ahi no se ejecuta si creamos mas de 12 pokemones)

            axios.get(masPokemonesPorFavor)

                .then(response => {

                    buffer.masPokemonesPorFavor = response.data.next
                    // console.log(buffer.masPokemonesPorFavor);

                    //axios.get retorna una promesa, hago un array de promesas con lo que me devuelve (que pueden estar con el status resuelta o no, pero estan en el array)
                    var arrayPromesas = response.data.results.map(prePokemon => axios.get(prePokemon.url))

                    //aca utilizo la resolucion del array de promesas
                    Promise.all(arrayPromesas).then(arrayPromesasResueltas => arrayPromesasResueltas.forEach(response => {

                        let pokemon = response.data

                        // console.log(pokemon.name)
                        // console.log(pokemon.types.map((e) => e.type.name))
                        // console.log(pokemon.sprites.other["official-artwork"].front_default)

                        pokemonBuffer.push({
                            id: pokemon.id,
                            name: pokemon.name,
                            types: pokemon.types.map((e) => e.type.name),
                            imagen: pokemon.sprites.other["official-artwork"].front_default
                        })

                        /* "types": [
                            {
                                "slot": 1,
                                "type": {
                                    "name": "grass",
                                    "url": "https://pokeapi.co/api/v2/type/12/"
                                }
                            }, */

                    } 

                    )).finally(() => res.json({ docePokemonos: pokemonBuffer.splice(0, 12), cuantosQuedan: pokemonBuffer.length })) //devuelve 11
                    //////////////aca temrina el promise.all, con su finally//////////////////////////////////////////////////////////////////

                })

                .catch(error => res.status(500).json({ error: "Ups! Inicial" }))

        }

        else { res.json({ docePokemonos: pokemonBuffer.splice(0, 12), cuantosQuedan: pokemonBuffer.length }) }

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
                imagen: "null"
            })
        }

        else {
            axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeName)

                .then(response => {

                    let pokemon = response.data

                    res.json({
                        name: pokemon.name,
                        types: pokemon.types.map((e) => e.type.name),
                        imagen: pokemon.sprites.other["official-artwork"].front_default
                    })
                })

                .catch(error => res.status(500).json({ error: "Ups!Name Pokemon no encontrado!", /* descripcion:error.stack  */ }))
        }


    }


})

module.exports = router



