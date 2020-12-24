const pacienteCntrl = {}

const filter = (req, paciente)=>{
    return paciente.filter(post => post.username === req.userId)
}

const Paciente = require('../models/paciente')

pacienteCntrl.getPacientes = async (req, res) => {
    pacientes = await Paciente.find()
    // res.json( filter(req, pacientes) )
    res.json ( pacientes )
}

pacienteCntrl.createPacientes = async (req, res) => {
    const newPaciente = new Paciente(req.body)
    await newPaciente.save()
    res.json({
        message: 'Paciente created'
    })
}

pacienteCntrl.getSpecificPacientes = async (req, res) => {
    console.log(req.params)
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
