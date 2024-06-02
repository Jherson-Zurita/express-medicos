const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const medicoController = require('./controllers/medicoController');
const especialidadController = require('./controllers/especialidadController');
const sequelize = require('./config/database');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.post('/medicos', medicoController.addMedico);
app.get('/medicos', medicoController.getMedicos);
app.get('/medicos/:id', medicoController.getMedicoById);
app.put('/medicos/:id', medicoController.updateMedico);
app.delete('/medicos/:id', medicoController.deleteMedico);

app.get('/especialidades', especialidadController.getAllEspecialidades);
app.get('/especialidades/:id', especialidadController.getEspecialidadById);
app.post('/especialidades', especialidadController.createEspecialidad);
app.put('/especialidades/:id', especialidadController.updateEspecialidad);
app.delete('/especialidades/:id', especialidadController.deleteEspecialidad);

sequelize.sync({ force: true })  
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Unable to synchronize the database:', err);
  });

module.exports = app;


