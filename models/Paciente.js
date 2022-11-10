const mongoose = require('mongoose');

const PacienteSchema = mongoose.Schema({
    //datos personales
    nhc: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    lugarNacimiento: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    ocupacion: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    fechaCreacion: {  
        type: Date,
        default: Date.now()
    },
    // antecedentes Patologicos Familiares
    antecedentesPatologicosFamiliares: {  
        type: String,
        required: false
    },
    // antecedentes Patologicos Personales
    antecedentesPatologicosPersonales: {  
        type: Array,
        required: false
    },
     // examen extra oral
    atm: {  
        type: String,
        required: false
    },
    ganglioslinfaticos: {  
        type: String,
        required: false
    },
    respirador: {  
        type: Array,
        required: false
    },
    otrosExamenExtraOral: {  
        type: String,
        required: false
    },
     // examen intra oral
    labios: {  
        type: String,
        required: false
    },
    lengua: {  
        type: String,
        required: false
    },
    paladar: {  
        type: String,
        required: false
    },
    pisoDeLaBoca: {  
        type: String,
        required: false
    },
    mucosaYugal: {  
        type: String,
        required: false
    },
    encias: {  
        type: String,
        required: false
    },
    // antecedentes bucodentales
    fechaUltimaVisita: {  
        type: Date,
        required: false
    },
    habitos: {  
        type: Array,
        required: false
    },
    protesis: {  //si/no
        type: String,
        required: false
    },
    // antecedentes de higiene oral
    cepillo: {  
        type: String,
        required: false
    },
    hilo: {  
        type: String,
        required: false
    },
    enjuague: {  
        type: String,
        required: false
    },
    frecuenciaCepillado: {  
        type: String,
        required: false
    },
    sangreEncias: {  
        type: String,
        required: false
    },
    higieneDental: {  
        type: Array,
        required: false
    },
    problemaTratamiento: {  
        type: String,
        required: false
    },
    //
    observaciones: {  
        type: String,
        required: false
    },
    //
    motivoConsulta: {  
        type: String,
        required: false
    },
    //
    examenClinico: {  
        type: String,
        required: false
    },
    //
    diagnostico: {  
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Paciente', PacienteSchema);