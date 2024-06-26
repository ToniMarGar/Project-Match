const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Quizz = sequelize.define(
  "quizz",
  {
    Qtravelers: {
      type: DataTypes.STRING,
     },
    Qexperience: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    Qweather: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    Qlocation: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    Qcontinent: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     idUser: {
      type: DataTypes.STRING,
      allowNull: false,
     }
  },
   {
    	//opciones
      createdAt:false,
    	updatedAt: false,
    	}
);

module.exports = Quizz;