const citaGinecoCntrl = {}

const CitaGineco = require('../models/citaGineco')

citaGinecoCntrl.getCitasGineco = async (req, res) => {
    citas = await CitaGineco.find()
    res.json(citas)
}

citaGinecoCntrl.createCitaGineco = async (req, res) => {
    const newCitaGineco = new CitaGineco(req.body)
    await newCitaGineco.save()
    res.send({
        message: 'CitaGineco created'
    })
}

citaGinecoCntrl.getSpecificCitaGineco = async (req, res) => {
    console.log(req.params)
    const cita = await CitaGineco.findById(req.params.id)
    res.send(cita)
}

citaGinecoCntrl.updateCitaGineco = async (req, res) => {
    await CitaGineco.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        message: 'CitaGineco Updated'
    })
}

citaGinecoCntrl.deleteCitaGineco = async (req, res) => {
    await CitaGineco.findByIdAndDelete(req.params.id)
    res.json({
        status: 'citaGineco deleted'
    })
}


module.exports = citaGinecoCntrl