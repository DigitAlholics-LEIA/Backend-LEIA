const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Sede = require('./sede'); 

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

Curso.hasMany(Sede, { foreignKey: 'cursoId' }); // Relación con Sede (un curso puede tener varias sedes)
Sede.belongsTo(Curso, { foreignKey: 'cursoId' }); // Relación inversa (una sede pertenece a un curso)

module.exports = Curso;
