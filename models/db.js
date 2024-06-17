const { Sequelize } = require('sequelize');
const db = new Sequelize('food_db', 'root', 'pass@123', {
    host: 'localhost',
    dialect: 'mysql'
  });
module.exports = db;