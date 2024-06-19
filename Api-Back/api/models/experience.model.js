const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Experience = sequelize.define(
  "experience",
  {
    userinExperience: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    experienceDestination: {
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