//ACA USO SEQUALIZE PARA CONSULTAR MI BASE DE DATOS

require('dotenv').config();//tiene que ver con variables de entorno
const { Sequelize } = require('sequelize');//IMPORTA el sequelize para manejar tu database


const fs = require('fs');//para buscar en carpetas
const path = require('path');//el path para buscar
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env; //variables arbitrarias para acceder a la base de dat


//crea el sequelize
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});




//////CREA LOS MODELOS A PARTIR DE LA CARPETA MODELS/////////////////////////////////////////////////////////////////
const basename = path.basename(__filename);//se queda con el nombre del archivo, como segunda parametro le podes pasar para que excluya tambien a la extension por ejemplo (pero podes hacer que exlyu cualquier cosa, saca cosas de la derecha)
// filename C:\Users\Ezequiel\OneDrive\Programacion\Henry\Cursada\Kickoff y PI\PI-Pokemon\api\src\db.js

//basename=db.js jajaja
// console.log(basename)
//EXPLICACION DE PATH DE DOCUMENTACION
/* path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// Returns: 'quux' */

const modelDefiners = [];//array con los modelos definidos en models (en models se definen funciones que aca se invocan!)

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners


//dirname es como filename, pero te devuelve un string con la ruta de la carpeta en donde estas parado, en este caso 
//C:\Users\Ezequiel\OneDrive\Programacion\Henry\Cursada\Kickoff y PI\PI-Pokemon\api\src\



//PATH JOIN:junta fragmetnos de path con coherecia para hacer un path separado por varras invertidas 

/* path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}' */



//path.join __dirname, /models, es decir. ....api/src/models
// console.log(path.join(__dirname, '/models'))

//console.log(fs.readdirSync(path.join(__dirname, '/models')))//////[ 'Pokemon.js' ]
  

fs.readdirSync(path.join(__dirname, '/models'))//esto genera un array con los nombres de lo que este en models, al principio [ 'Pokemon.js' ]

  .filter((file) => ( file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') )//filta modificando el array, los archivos que tegan un punto en el cero, que se llamen como el nombre de este archivo .db (el path entero) y que no terminen en ".js"

  .forEach((file) => {//pushe en mode definers
    modelDefiners.push(require(path.join(__dirname, '/models', file))); //hasta modelDefiners es un array con las funciones de los models importadas
  });


// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize)); //Por cada funcion traida de models, la invoca con sequalice. Generando las tablas adecuadas

//ACA YA TENGO LAS TABLAS GENERADAS A PARTIR DE LOS ARCHIVOS -JS DE MODELS!!!


// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models); //object entries transforma un objeto en un array de arrays claves valor
//entries = [ [ 'pokemon', pokemon ] ]
//console.log(sequelize.models)/// { pokemon: pokemon }, tiene objetos con cada tabla creada!!

let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);//Pone en mayuscula la "clave" del arrays de arrays de "claves-valor"
//console.log(capsEntries);//[ [ 'Pokemon', pokemon ] ]


sequelize.models = Object.fromEntries(capsEntries);//hace el proceso inverso, pasa de [ [ 'Pokemon', pokemon ] ] a { Pokemon: pokemon }
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
//////FIN DEEEEEEEEE  CREA LOS MODELOS A PARTIR DE LA CARPETA MODELS/////////////////////////////////////////////////////////////////



//Aca los desestructuro para quedarme con cada modelo
const { Pokemon, Types } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Pokemon.belongsToMany(Types, {through: 'Pokemon_Types'})
Types.belongsToMany(Pokemon, {through: 'Pokemon_Types'})



//ACA ABAJO exporta TODOS los modelos (cada uno sera un elemento, y el sequelize!)
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
