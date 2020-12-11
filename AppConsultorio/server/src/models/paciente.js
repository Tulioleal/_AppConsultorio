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
        required : true
    },
    seguimiento : {
        type : Boolean,
        default : true,
        required : true
    },
    antecedentePersonal : {
        type : String,
        required : true
    },
    antecedenteFamiliar : {
        type : String,
        required : true
    },
    ginecoMenorrea : {
        type : Boolean,
        required : true
    },
    ginecoGestas : {
        type : Number,
        default : 0,
        required : true
    },
    ginecoParas : {
        type : Number,
        default : 0,
        required : true
    },
    ginecoCiclos: {
        type : String,
        required : true
    },
    ginecoAbortos : {
        type : Number,
        default : 0,
        required : true
    },
    ginecoCesareas : {
        type : Number,
        default : 0,
        required : true
    },
    ginecoOtros : {
        type : Number,
        default : 0,
        required : true
    },
    ginecoMenopausia : {
        type : Number,
        default : 0,
        required : true
    },
    ginecoMenarquia : {
        type : Number,
        default : 0,
        required : true
    },
    ginecoPRS :{
        type : Number,
        default : 0,
        required : true
    },
    ginecoMetodo : {
        type : String
    },
    ginecoTRH : {
        type : String
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Paciente', pacienteSchema, 'pacientes')