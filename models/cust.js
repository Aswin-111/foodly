const { DataTypes } = require("sequelize");
const db = require("./db");

const Cust = db.define("Cust", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  cust_name: {
    type: DataTypes.STRING,
  },

  cust_address: {
    type: DataTypes.STRING,
  },

  cust_phone: {
    type: DataTypes.STRING,
    defaultValue: true,
  },
}, { timestamps : false});

module.exports =  Cust
