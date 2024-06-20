const { sequelize } = require("../../database/index.js");
const { DataTypes } = require("sequelize");

const ContactInfo = sequelize.define(
  "contactInfo",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     surname: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     username: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     email: {
      type: DataTypes.STRING,
      allowNull: false,
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

module.exports = ContactInfo;