const { Router } = require('express');
const pacienteCntrl = require('../controllers/pacientes.controllers');
const router = Router()

const { authJwt } = require('./../middlewares')

const {
  verifyToken,
  isModerator,
  isAdmin
} = authJwt


router.get('/', verifyToken, pacienteCntrl.getPacientes)

router.post('/', verifyToken, pacienteCntrl.createPacientes)

router.get('/:id', verifyToken, pacienteCntrl.getSpecificPacientes)

router.put('/:id', verifyToken, pacienteCntrl.updatePacientes)

router.delete('/:id', verifyToken, pacienteCntrl.deletePacientes)


module.exports = router
