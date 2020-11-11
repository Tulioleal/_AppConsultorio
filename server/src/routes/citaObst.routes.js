const { Router } = require('express')
const citaCntrl = require('../controllers/citaObst.controllers')
const router = Router()


router.post('/', citaCntrl.createCitaObst)

router.get('/:pacienteId', citaCntrl.getCitasObst)

router.get('/:id', citaCntrl.getSpecificCitaObst)

router.put('/:id', citaCntrl.updateCitaObst)

router.delete('/:id', citaCntrl.deleteCitaObst)


module.exports = router