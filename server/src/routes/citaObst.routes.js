const { Router } = require('express')
const citaCntrl = require('../controllers/citaObst.controllers')
const router = Router()


router.get('/:pacienteId', citaCntrl.getCitasObst)

router.post('/', citaCntrl.createCitaObst)

router.get('/:pacienteId/:ges', citaCntrl.getCitasG)

router.put('/:id', citaCntrl.updateCitaObst)

router.delete('/:id', citaCntrl.deleteCitaObst)


module.exports = router