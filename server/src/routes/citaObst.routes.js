const { Router } = require('express')
const citaCntrl = require('../controllers/citaObst.controllers')
const router = Router()

router.get('/', citaCntrl.getCitasObst)

router.post('/', citaCntrl.createCitaObst)

router.get('/:id', citaCntrl.getSpecificCitaObst)

router.put('/:id', citaCntrl.updateCitaObst)

router.delete('/:id', citaCntrl.deleteCitaObst)


module.exports = router