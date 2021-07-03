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
