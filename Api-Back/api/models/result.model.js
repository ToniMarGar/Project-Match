const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Result = sequelize.define(
  "result",
  {
    /* id: {
      type: DataTypes.STRING,
      unique: true,
    }, */
    resultQuizz: {
      type: DataTypes.INTEGER,
     },
    resultUsername: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    resultDestination: {
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