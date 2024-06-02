const EspecialidadService = require('../services/especialidadService');

const getAllEspecialidades = async (req, res) => {
  try {
    const especialidades = await EspecialidadService.getAllEspecialidades();
    res.json(especialidades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener especialidades' });
  }
};

const getEspecialidadById = async (req, res) => {
  try {
    const especialidadId = parseInt(req.params.id);
    const especialidad = await EspecialidadService.getEspecialidadById(especialidadId);
    if (!especialidad) {
      res.status(404).json({ message: 'Especialidad no encontrada' });
      return;
    }
    res.json(especialidad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener especialidad' });
  }
};

const createEspecialidad = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const especialidad = await EspecialidadService.createEspecialidad(nombre, descripcion);
    res.json(especialidad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear especialidad' });
  }
};

const updateEspecialidad = async (req, res) => {
  try {
    const especialidadId = parseInt(req.params.id);
    const { nombre, descripcion } = req.body;
    const updatedEspecialidad = await EspecialidadService.updateEspecialidad(especialidadId, nombre, descripcion);
    if (!updatedEspecialidad) {
      res.status(404).json({ message: 'Especialidad no encontrada' });
      return;
    }
    res.json(updatedEspecialidad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar especialidad' });
  }
};

const deleteEspecialidad = async (req, res) => {
  try {
    const especialidadId = parseInt(req.params.id);
    await EspecialidadService.deleteEspecialidad(especialidadId);
    res.json({ message: 'Especialidad eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar especialidad' });
  }
};

module.exports = {
  getAllEspecialidades,
  getEspecialidadById,
  createEspecialidad,
  updateEspecialidad,
  deleteEspecialidad
};