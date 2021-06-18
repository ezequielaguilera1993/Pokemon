//ACA VA EL MODELO DE POKEMON DE MI BASE DE DATOS QUE TIENE TODO

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//https://sequelize.org/v3/api/datatypes/
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', { //ojo, esto es lo que pluraliza, no lo demas!

 idPokemonCreado:{
  type: DataTypes.STRING,
  allowNull: false,
  primaryKey: true,
}, 

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vida: {
      type: DataTypes.INTEGER,
    },

    fuerza: {
      type: DataTypes.INTEGER,
    },

    defensa: {
      type: DataTypes.INTEGER,
    },

    velocidad: {
      type: DataTypes.INTEGER,
    },

    altura: {
      type: DataTypes.INTEGER,
    },

    peso: {
      type: DataTypes.INTEGER,
    },

    imagen: {
      type: DataTypes.STRING,
    },


  });
};

