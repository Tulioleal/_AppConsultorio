const {
    Schema,
    model
} = require('mongoose')

const citaObstSchema = new Schema({

    pacienteId:{
        type: String,
        required: true
    },
    visita: {
        type: Number,
        required: true
    },
    motivo: {
        type: String,
        required: true
    },
    histEnfAct: {
        type: String,
        required: true
    },
    ultMenst: {
        type: Date,
        required: true
    },
    penMenst: {
        type: Date,
        required: true
    },
    fechaEmb: {
        type: Date,
        required: true
    },
    pesoAEmb: {
        type: Number,
        required: true
    },
    altura: {
        type: Number,
        required: true
    },
    gestas: {
        type: Number,
        required: true
    },
    percepFetal: {
        type: String,
        required: true
    },
    exGenEstadoG: {
        type: String,
        required: true
    },
    exGenPA: {
        type: String,
        required: true
    },
    exGenPulso: {
        type: String,
        required: true
    },
    exGenFR: {
        type: String,
        required: true
    },
    exGenPeso: {
        type: Number,
        required: true
    },
    exGenAlt: {
        type: Number,
        required: true
    },
    exObsAbdom: {
        type: String,
        required: true
    },
    exObsMovFet: {
        type: String,
        required: true
    },
    exObsAltUt: {
        type: String,
        required: true
    },
    exObsCircunAbdom: {
        type: String,
        required: true
    },
    exObsFCF: {
        type: String,
        required: true
    },
    exGineco: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('CitaObst', citaObstSchema, 'citasObst')
