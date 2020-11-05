const pacienteCntrl = {}

const Paciente = require('../models/paciente')

pacienteCntrl.getPacientes = async (req, res) => {
    pacientes = await Paciente.find()
    res.json(pacientes)
}

pacienteCntrl.createPacientes = async (req, res) => {
    const newPaciente = new Paciente(req.body)
    await newPaciente.save()
    res.send({
        message: 'Paciente created'
    })
}

pacienteCntrl.getSpecificPacientes = async (req, res) => {
    console.log(req.params)
    await Paciente.findById(req.params.id)
    res.send(paciente)
}

pacienteCntrl.updatePacientes = async (req, res) => {
    await Paciente.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        message: 'Paciente updated'
    })
}

pacienteCntrl.deletePacientes = async (req, res) => {
    await Paciente.findByIdAndDelete(req.params.id)
    res.json({
        status: 'Paciente deleted'
    })
}


module.exports = pacienteCntrl