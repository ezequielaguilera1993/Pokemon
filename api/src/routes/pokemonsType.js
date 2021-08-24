const axios = require("axios").default //para no tener que esta accediendo al default tood el tiempo
const { Router } = require('express');
const { Pokemon, Types } = require("../db")
const router = Router()
/*
 [ ] GET /types:
Obtener todos los tipos de pokemons posibles
En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
 */

router.get("/types", async function (req, res) {
    //
    let arrayPromises;

    await axios.get("https://pokeapi.co/api/v2/type").then(response => {

        arrayPromises = response.data.results.map(async function (e) {
            let name = e.name

            return Types.findOrCreate({
                where: { type: name }
            }).catch(er => console.log("error en typesAxios!"))

        })
    })

    await Promise.all(arrayPromises)
    res.json(await Types.findAll())


})

//Agrega types a la db/////////////

// Types.create({type:"come"}).then(()=>Types.findAll().then(e=>console.log(e)))


//////////////////////////////////


module.exports = router