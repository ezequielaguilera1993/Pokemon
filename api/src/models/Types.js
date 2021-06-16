const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Types', { //ojo, esto es lo que pluraliza, no lo demas!

      /*   idType: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        }, */

        type: {
            type: DataTypes.STRING,
        },

    })
}