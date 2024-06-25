const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Result = sequelize.define(
  "result",
  {
    quizzId: {
      type: DataTypes.INTEGER,
     },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
     },
    destinationName: {
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