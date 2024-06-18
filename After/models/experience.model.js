const { sequelize } = require("../../Api-Back/database/index.js");
const { DataTypes } = require("sequelize");

const Experience = sequelize.define(
  "experience",
  {
    id: {
      type: DataTypes.STRING,
      unique: true,
    },
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