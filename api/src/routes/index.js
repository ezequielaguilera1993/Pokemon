const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('./pokemons')
const pokemonsId = require('./pokemonsId')
const pokemonsType = require('./pokemonsType')
const pokemonsCreate = require('./pokemonsCreate')
const router = Router();

router.get('/db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null };
        res.render('pages/db', results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

// router.use("/pokemons",pokemonsName);
router.use("/pokemons", pokemons); //pokemonsame esta aca adentro!
router.use("/pokemons", pokemonsId);
router.use("/pokemons", pokemonsCreate);
router.use("/", pokemonsType);



module.exports = router;
