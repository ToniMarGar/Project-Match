const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
    "user",
    {
    username: {
    type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
      unique: true,
     },
    role: {
      type: DataTypes.ENUM("Admin", "Client", "Suscriptor"),
      defaultValue:"Client",
      allowNull: false,
     },
    email: {
      type: DataTypes.STRING,
      unique: true,
     },
    password: {
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

module.exports = User;