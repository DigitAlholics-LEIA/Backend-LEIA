const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Specialty = sequelize.define('Specialty', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  StartDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  EndDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  Type:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Specialty;



/*Modelo: Espesialidad
nombre
fechaInicio
fechaFinAproximada
Tipo: (Idioma, Carrera, Curso)*/
