const medicoService = require('../services/medicoService');

const addMedico = async (req, res) => {
  try {
    const medico = await medicoService.addMedico(req.body);
    res.status(201).json(medico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMedicos = async (req, res) => {
  try {
    const medicos = await medicoService.getMedicos();
    res.status(200).json(medicos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMedicoById = async (req, res) => {
  try {
    const medico = await medicoService.getMedicoById(req.params.id);
    if (medico) {
      res.status(200).json(medico);
    } else {
      res.status(404).json({ error: 'Medico not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateMedico = async (req, res) => {
  try {
    const medico = await medicoService.updateMedico(req.params.id, req.body);
    if (medico) {
      res.status(200).json(medico);
    } else {
      res.status(404).json({ error: 'Medico not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMedico = async (req, res) => {
  try {
    const medico = await medicoService.deleteMedico(req.params.id);
    if (medico) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Medico not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addMedico,
  getMedicos,
  getMedicoById,
  updateMedico,
  deleteMedico
};
