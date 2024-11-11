const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Curso = sequelize.define('Curso', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  fechaFinAproximada: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  numeroDeCiclos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precios: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sede: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Curso;
