const { DataTypes } = require('sequelize');

const db = require('./db')



  const User = db.define(
    'User',
    {
      
        username: {
        type: DataTypes.STRING,
        
      },
      password: {
        type: DataTypes.STRING,
      },
      role : {
        type : DataTypes.STRING,
      }
      
    },
    {
        timestamps:false
    },
   
  );
  module.exports = User