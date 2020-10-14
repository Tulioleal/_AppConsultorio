const pacienteCntrl = {}

const Paciente = require('../models/paciente')

pacienteCntrl.getPacientes = async (req, res) => {
    pacientes = await Paciente.find()
    res.json(pacientes)
}

pacienteCntrl.createPacientes = async (req, res) => {
    const newPaciente = new Paciente(req.body)
    await newPaciente.save()
    res.send({ message : 'Paciente created' })
    err.send({ message: 'error' })
}

pacienteCntrl.getSpecificPacientes = async (req, res) => {
    console.log(req.params)
    const paciente = await Paciente.findById( req.params.id )
    res.send(paciente)
}

pacienteCntrl.updatePacientes = async (req, res) => {
    const paciente = await Paciente.findByIdAndUpdate( req.params.id , req.body)
    res.json({ message : 'update paciente' })
}

pacienteCntrl.deletePacientes = async (req, res) => {
    const paciente = await Paciente.findByIdAndDelete(req.params.id)
    res.json({ status : 'paciente deleted' })
}


module.exports = pacienteCntrl