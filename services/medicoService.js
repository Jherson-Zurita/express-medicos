const Medico = require('../models/medico');
const Especialidad = require('../models/especialidad');

const addMedico = async (data) => {
  return await Medico.create(data);
};

const getMedicos = async () => {
  return await Medico.findAll({
    include: Especialidad
  });
};

const getMedicoById = async (id) => {
  return await Medico.findByPk(id, {
    include: Especialidad
  });
};

const updateMedico = async (id, data) => {
  const medico = await getMedicoById(id);
  if (medico) {
    return await medico.update(data);
  }
  return null;
};

const deleteMedico = async (id) => {
  const medico = await getMedicoById(id);
  if (medico) {
    return await medico.destroy();
  }
  return null;
};

module.exports = {
  addMedico,
  getMedicos,
  getMedicoById,
  updateMedico,
  deleteMedico
};
