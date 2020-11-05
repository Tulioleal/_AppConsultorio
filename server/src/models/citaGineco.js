const {
    Schema,
    model
} = require('mongoose')

const citaGinecoSchema = new Schema({

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
    genEstado: {
        type: String,
        required: true
    },
    genComentarios: {
        type: String,
        required: true
    },
    ginecoMamas: {
        type: String,
        required: true
    },
    ginecoGen: {
        type: String,
        required: true
    },
    ginecoGenExt: {
        type: String,
        required: true
    },
    ginecoCervix: {
        type: String,
        required: true
    },
    ginecoUtero: {
        type: String,
        required: true
    },
    ginecoImpClin: {
        type: String,
        required: true
    },
    ginecoColpos: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('CitaGineco', citaGinecoSchema, 'citasGineco')