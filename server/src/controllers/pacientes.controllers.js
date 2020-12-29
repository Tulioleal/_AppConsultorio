const pacienteCntrl = {}

const filter = (req, paciente)=>{
    return paciente.filter(post => post.userId === req.userId)
}

const Paciente = require('../models/paciente')

pacienteCntrl.getPacientes = async (req, res) => {
    pacientes = await Paciente.find()
    res.json( filter(req, pacientes) )
}

pacienteCntrl.createPacientes = async (req, res) => {
    const newPaciente = new Paciente(req.body)
    newPaciente.userId = req.userId
    await newPaciente.save()

    res.status(200).json({
        message: 'Paciente Created'
    })
}

pacienteCntrl.getSpecificPacientes = async (req, res) => {
    const paciente = await Paciente.findById(req.params.id)
    res.json(paciente)
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
