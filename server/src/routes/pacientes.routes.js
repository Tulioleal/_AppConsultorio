const { Router } = require('express');
const express = require('express');
const pacienteCntrl = require('../controllers/pacientes.controllers');
const router = Router()


const pacientesCntrl = require('../controllers/pacientes.controllers');

router.get('/', pacientesCntrl.getPacientes)

router.post('/', pacienteCntrl.createPacientes)

router.get('/:id', pacienteCntrl.getSpecificPacientes)

router.put('/:id', pacienteCntrl.updatePacientes)

router.delete('/:id', pacienteCntrl.deletePacientes)


module.exports = router 