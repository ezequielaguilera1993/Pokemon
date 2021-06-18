//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//                | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * 
 * 
 * FRONT
 * Front aparece por primera vez
 * 
 * BACK
 * El suma a objBuffer elementos a demanda con los pokemons de la db (tiene 3 por ejemplo) SOLO SI ESTA VACIO!
 * {pokemonesBuffer, masPokemones: "enlaceASiguientePagina"}
 * Pregunta si el objBuffer.pB tiene al menos 12. Como no tiene llama a 20 mas
 * Pide 20 al back, Y ACTUALIZA EL MASPOKEMONS (si el mas pokemons esta vacio hace el llamado por defecto a /pokemons)
 * A este objBuffer.pB con lo de la database le pushea lo que traiga del axios (20 pokemones)
 * Devuelve un splice con los primeros 12 del objBuffer(quedan  11 -por 23-12- )
 * 
 * FRONT
 * En el front se guardan en el estado como pokemonesPrincipal (12 pokemones)
 * Se renderea un SLICE (NO splice) de 0 a 6 de pokemonesPrincipal (se crean dos variables, punteroA y puntero B)
 * (si el slice empieza en 0 se inhabilita el prev -empieza en 0 porque lo harcodeo-)
 * Si el usuario toca sig, le suma 6 al slice, y renderea slice 6-12
 * Detecta que el segundo valor es igual al count de todos los elementos
 * Entonces hace un axios pidiendo mas
 *  
 * BACK
 * Al back le quedaban 11
 * Como NO ESTA VACIO, pasa al paso de preguntar si tiene menos de 12
 * Tiene menos de 12, entonces
 * Pide 20 mas (ahora tiene 33) LO PIDE AL "masPokemons" del buffer
 * Devuelve un splice de 0-11, le quedan 21 (33-12)
 * 
 * FRONT
 * Le llegan 12 mas al front y los pinta como antes. La llamada al api deberia manejarse con una promesa
 * Para que recien pinte los que se pidieron cuando llegan
 * Llega al 24, detecta que no tiene mas y hace otro pedido a pokemons
 * 
 * BACK
 * Recibe el pedido pero ahora tiene 21 asi que le envia 12 directamente y le quedan 9
 * (en la proxima llamada busca 20 mas)
 */

//ACA JUNTA TODO LO DEL BACKEND. 
const server = require('./src/app.js'); //BACKEND
const { conn, Pokemon, Types } = require('./src/db.js');//conn ===sequelize

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { //primero borra las tablas, y despues se pone a escuchar al server
// console.log(conn.models)// : { Pokemon: pokemon }

  server.listen(3001, () => { //en el 3000 va a correr react! EN EL 3001 CORRE EL BACK!
    console.log('%s listening at 3001'); // eslint-disable-line no-console
 
 
  });

});
