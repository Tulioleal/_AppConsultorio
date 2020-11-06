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
        type: Number,
        required: true
    },
    diasEmb: {
        type: Number,
        required: true
    },
    meses: {
        type: Number,
        required: true
    },
    conDias: {
        type: Number,
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