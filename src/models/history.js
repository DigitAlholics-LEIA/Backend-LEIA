const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Institution = require('./Institution');

const History = sequelize.define('History', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

History.belongsTo(Institution, { foreignKey: 'institutionId' }); 

module.exports = History;