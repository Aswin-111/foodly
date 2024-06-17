const { DataTypes } = require("sequelize");
const db = require("./db");

const Super = db.define("Super", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  super_name: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },

  super_code: {
    type: DataTypes.STRING,
  },
   





  

  super_status:{
    type : DataTypes.BOOLEAN,
    defaultValue: true
  },

  
  super_present : {
    type : DataTypes.BOOLEAN,
    defaultValue : true
  }
},
        

  




{timestamps : false}
)


module.exports = Super