const citaObstCntrl = {}

const CitaObst = require('../models/citaObst')

citaObstCntrl.getCitasObst = async (req, res) => {
    citas = await CitaObst.find({ pacienteId : req.params.pacienteId })
    res.json(citas)
}

citaObstCntrl.getCitasG = async (req, res) =>{
    citas = await CitaObst.find({
        pacienteId: {$eq:req.params.pacienteId},
        gestas: {$eq:req.params.ges}
    })
    res.json(citas)
}    

citaObstCntrl.getSpecificCita = async(req,res) =>{
    cita = await CitaObst.findOne({
        pacienteId: {$eq:req.params.pacienteId},
        gestas: {$eq:req.params.ges},
        _id: {$eq:req.params.id}
    })
    res.json(cita)
}

citaObstCntrl.createCitaObst = async (req, res) => {
    const newCitaObst = new CitaObst(req.body)
    await newCitaObst.save()
    res.send({
        message: 'CitaObst created'
    })
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