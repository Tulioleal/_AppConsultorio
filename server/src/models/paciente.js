const {Schema, model} = require('mongoose')

const pacienteSchema = new Schema({
    nombre : {
        type : String,
        required : true
    },
    apellido : {
        type : String,
        required : true
    },
    nacimiento : {
        type : String,
        required : true
    },
    telf : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : false
    },
    seguimiento : {
        type : Boolean,
        default : true
    },
    antecedentePersonal : {
        type : String
    },
    antecedenteFamiliar : {
        type : String
    },
    ginecoMenorrea : {
        type : Boolean
    },
    ginecoGestas : {
        type : Number,
        default : 0
    },
    ginecoParas : {
        type : Number,
        default : 0
    },
    ginecoAbortos : {
        type : Number,
        default : 0
    },
    ginecoCesareas : {
        type : Number,
        default : 0
    },
    ginecoOtros : {
        type : Number,
        default : 0
    },
    ginecoMetodo : {
        type : String
    },
    ginecoMenopausia : {
        type : Number
    },
    ginecoTRH : {
        type : String
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Paciente', pacienteSchema, 'pacientes')