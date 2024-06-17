
const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
     },
     surname: {
      type: DataTypes.STRING,
     },
     email: {
      type: DataTypes.STRING,
      unique: true,
     },
   password: {
      type: DataTypes.STRING,
     },
  },
   {
    	//opciones
      createdAt:false,
    	updatedAt: false,
    	}
);

module.exports = User;