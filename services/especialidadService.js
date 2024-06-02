const Especialidad = require('../models/especialidad');

const getAllEspecialidades = async () => {
  return await Especialidad.findAll();
};

const getEspecialidadById = async (id) => {
  return await Especialidad.findByPk(id);
};

const createEspecialidad = async (nombre) => {
  return await Especialidad.create({ nombre });
};

const updateEspecialidad = async (id, nombre) => {
  const especialidad = await getEspecialidadById(id);
  if (especialidad) {
    return await especialidad.update({ nombre });
  }
  return null;
};

const deleteEspecialidad = async (id) => {
  const especialidad = await getEspecialidadById(id);
  if (especialidad) {
    return await especialidad.destroy();
  }
  return null;
};

module.exports = {
  getAllEspecialidades,
  getEspecialidadById,
  createEspecialidad,
  updateEspecialidad,
  deleteEspecialidad
};
