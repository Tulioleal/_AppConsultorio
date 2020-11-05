const { Router } = require('express')
const citaCntrl = require('../controllers/citaGineco.controllers')
const router = Router()

router.get('/', citaCntrl.getCitasGineco)

router.post('/', citaCntrl.createCitaGineco)

router.get('/:id', citaCntrl.getSpecificCitaGineco)

router.put('/:id', citaCntrl.updateCitaGineco)

router.delete('/:id', citaCntrl.deleteCitaGineco)


module.exports = router