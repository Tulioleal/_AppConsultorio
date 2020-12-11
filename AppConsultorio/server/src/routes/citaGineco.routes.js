const { Router } = require('express')
const citaCntrl = require('../controllers/citaGineco.controllers')
const router = Router()


router.post('/', citaCntrl.createCitaGineco)

router.get('/:pacienteId', citaCntrl.getCitasGineco)

router.get('/:pacienteId/:id', citaCntrl.getSpecificCitaGineco)

router.put('/:id', citaCntrl.updateCitaGineco)

router.delete('/:id', citaCntrl.deleteCitaGineco)


module.exports = router