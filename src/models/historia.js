const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Curso = require('./curso');

const Historia = sequelize.define('Historia', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagenUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

Historia.belongsTo(Curso, { foreignKey: 'cursoId' });
Curso.hasMany(Historia, { foreignKey: 'cursoId' });

module.exports = Historia;
