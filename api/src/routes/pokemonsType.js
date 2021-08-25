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
    let tiposEnBruto = await axios.get("https://pokeapi.co/api/v2/type")
    let tiposBulk = tiposEnBruto.data.results.map((e) => ({ type: e.name }))

    let tiposOk = await Types.bulkCreate(tiposBulk)

    res.json(tiposOk)
})



module.exports = router