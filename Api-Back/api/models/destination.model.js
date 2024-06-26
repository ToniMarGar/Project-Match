const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Destination = sequelize.define(
  "destination",
  {
    destinationName: {
      type: DataTypes.STRING,
      primaryKey: true,
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
     userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
     }
  },
   {
    	//opciones
      createdAt:false,
    	updatedAt: false,
    	}
);

module.exports = Destination;