const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Especialidad = require('./especialidad');

const Medico = sequelize.define('Medico', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidadId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Especialidad,
      key: 'id'
    }
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'medicos'
});

Medico.belongsTo(Especialidad, { foreignKey: 'especialidadId' });
Especialidad.hasMany(Medico, { foreignKey: 'especialidadId' });

module.exports = Medico;
