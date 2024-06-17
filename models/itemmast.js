const { DataTypes } = require("sequelize");
const db = require("./db");

const ItemMast = db.define("ItemMast", {
  item_code: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  item_name: {
    type : DataTypes.STRING,
  },
  
  
  

  






  
  item_qty: {
    type : DataTypes.INTEGER,

  },



  


  
  item_description : {
     type : DataTypes.STRING,
  },


  
  item_category : {
    type : DataTypes.STRING,
  }
},{timestamps : false});

module.exports =  ItemMast 