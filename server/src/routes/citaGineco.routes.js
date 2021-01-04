const { Router } = require('express')
const citaCntrl = require('../controllers/citaGineco.controllers')
const router = Router()

const { authJwt } = require('./../middlewares')

const {
  verifyToken
} = authJwt


router.post('/', verifyToken, citaCntrl.createCitaGineco)

router.get('/:pacienteId', verifyToken, citaCntrl.getCitasGineco)

router.get('/:pacienteId/:id', verifyToken, citaCntrl.getSpecificCitaGineco)

router.put('/:id', verifyToken, citaCntrl.updateCitaGineco)

router.delete('/:id', verifyToken, citaCntrl.deleteCitaGineco)


module.exports = router
