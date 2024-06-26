const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const Quizz = sequelize.define(
  "quizz",
  {
    QdestinationName: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    Qtravelers: {
      type: DataTypes.STRING,
      allowNull: false,
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

module.exports = Quizz;