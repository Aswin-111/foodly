const { DataTypes } = require("sequelize");
const db = require("./db");

const OrderTrx = db.define("OrderTrx", {
  line_num: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  ord_num: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  ord_year: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },

  cust_name: {
    type: DataTypes.STRING,
  },

  order_to: {
    type: DataTypes.STRING,
  },

  order_qty: {
    type: DataTypes.STRING,
  },
  approval: {
    type: DataTypes.BOOLEAN,
  },
},{
  timestamps : false
});

module.exports = OrderTrx