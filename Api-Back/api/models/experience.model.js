const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Experience = sequelize.define(
  "experience",
  {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    destination: {
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

module.exports = Experience;