const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Specialty = require('../models/Specialty')

const Institution = sequelize.define('Institution', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cycles: {
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

Institution.belongsTo(Specialty, { foreignKey: 'specialtyId' });

module.exports = Institution

//Tipo: (Idioma, Carrera, Curso)
