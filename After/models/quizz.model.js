const { sequelize } = require("../../Api-Back/database/index.js");
const { DataTypes } = require("sequelize");

const Quizz = sequelize.define(
  "quizz",
  {
    id: {
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

module.exports = Quizz;