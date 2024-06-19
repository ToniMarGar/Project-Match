const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Quizz = sequelize.define(
  "quizz",
  {
    /*id: {
      type: DataTypes.STRING,
      unique: true,
    },*/
    Qtravelers: {
      type: DataTypes.INTEGER,
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
  },
   {
    	//opciones
      createdAt:false,
    	updatedAt: false,
    	}
);

module.exports = Quizz;