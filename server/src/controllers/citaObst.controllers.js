const citaObstCntrl = {}

const CitaObst = require('../models/citaObst')

citaObstCntrl.getCitasObst = async (req, res) => {
    citas = await CitaObst.find({ pacienteId : req.params.pacienteId })
    res.json(citas)
}

citaObstCntrl.createCitaObst = async (req, res) => {
    const newCitaObst = new CitaObst(req.body)
    await newCitaObst.save()
    res.send({
        message: 'CitaObst created'
    })
}

citaObstCntrl.getSpecificCitaObst = async (req, res) => {
    console.log(req.params)
    const cita = await CitaObst.findById(req.params.id)
    res.send(cita)
}

citaObstCntrl.updateCitaObst = async (req, res) => {
    await CitaObst.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        message: 'CitaObst Updated'
    })
}

citaObstCntrl.deleteCitaObst = async (req, res) => {
    await CitaObst.findByIdAndDelete(req.params.id)
    res.json({
        status: 'CitaObst deleted'
    })
}


module.exports = citaObstCntrl