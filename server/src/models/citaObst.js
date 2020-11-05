const {
    Schema,
    model
} = require('mongoose')

const citaObstSchema = new Schema({

    visita: {
        type: Number,
        required: true
    },
    motivo: {
        type: String,
        required: true
    },
    valorConsulta: {
        type: String,
        required: true
    },
    HistEnfEvo: {
        type: String,
        required: true
    },
    HistClinPre: {
        type: String,
        required: true
    },
    ultMenst: {
        type: String,
        required: true
    },
    penMenst: {
        type: String,
        required: true
    },
    fechaEmb: {
        type: String,
        required: true
    },
    semanas: {
        type: String,
        required: true
    },
    diasEmb: {
        type: String,
        required: true
    },
    meses: {
        type: String,
        required: true
    },
    conDias: {
        type: String,
        required: true
    },
    pesoAEmb: {
        type: String,
        required: true
    },
    altura: {
        type: String,
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
        type: String,
        required: true
    },
    exGenAlt: {
        type: String,
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