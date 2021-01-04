const { Router } = require('express')
const citaCntrl = require('../controllers/citaObst.controllers')
const router = Router()

const { authJwt } = require('./../middlewares')

const {
  verifyToken
} = authJwt

router.get('/:pacienteId', verifyToken, citaCntrl.getCitasObst)

router.post('/', verifyToken, citaCntrl.createCitaObst)

router.get('/:pacienteId/:ges', verifyToken, citaCntrl.getCitasG)

router.get('/:pacienteId/:ges/:id', verifyToken, citaCntrl.getSpecificCita)

router.put('/:id', verifyToken, citaCntrl.updateCitaObst)

router.delete('/:id', verifyToken, citaCntrl.deleteCitaObst)


module.exports = router
