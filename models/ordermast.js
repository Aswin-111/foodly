
const { DataTypes } = require('sequelize')
const db = require('./db');


const OrderMast = db.define("OrderMast" , {
   ord_num : {
    type : DataTypes.INTEGER,
    primaryKey : true
},
ord_year:{
    type : DataTypes.INTEGER,
    primaryKey : true
},

cust_name : {
    type : DataTypes.STRING,

}

,

order_to:{
    type : DataTypes.STRING
}


}, {timestamps : false})

module.exports = OrderMast