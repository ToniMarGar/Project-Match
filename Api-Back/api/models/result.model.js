const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Result = sequelize.define(
  "result",
  {
    id: {
      type: DataTypes.STRING,
      unique: true,
    },
    idQuizz: {
      type: DataTypes.INTEGER,
     },
   idUsename: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    idDestination: {
      type: DataTypes.STRING,
      allowNull: false,
     },
  },
   {
    	//opciones
      createdAt:false,
    	updatedAt: false,
    	}
);

module.exports = Result;