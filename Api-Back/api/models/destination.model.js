const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Destination = sequelize.define(
  "destination",
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    travelers: {
      type: DataTypes.INTEGER,
     },
   experience: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    weather: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    continent: {
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

module.exports = Destination;