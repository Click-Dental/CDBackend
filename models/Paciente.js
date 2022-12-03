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
        type: String
        // required: true
    },
    // antecedentes Patologicos Personales
    antecedentesPatologicosPersonales: {  
        type: String
        // required: true
    },
     // examen extra oral
    atm: {  
        type: String,
        // required: true
    },
    ganglioslinfaticos: {  
        type: String,
        // required: true
    },
    respirador: {  
        type: String,
        // required: true
    },
    otrosExamenExtraOral: {  
        type: String,
        // required: true
    },
     // examen intra oral
    labios: {  
        type: String,
        // required: true
    },
    lengua: {  
        type: String,
        // required: true
    },
    paladar: {  
        type: String,
        // required: true
    },
    pisoDeLaBoca: {  
        type: String,
        // required: true
    },
    mucosaYugal: {  
        type: String,
        // required: true
    },
    encias: {  
        type: String,
        // required: true
    },
    // antecedentes bucodentales
    fechaUltimaVisita: {  
        type: Date,
        // required: true
    },
    habitos: {  
        type: String,
        // required: true
    },
    protesis: {  //si/no
        type: String,
        // required: true
    },
    // antecedentes de higiene oral
    cepillo: {  
        type: String,
        // required: true
    },
    hilo: {  
        type: String,
        // required: true
    },
    enjuague: {  
        type: String,
        // required: true
    },
    frecuenciaCepillado: {  
        type: String,
        // required: true
    },
    sangreEncias: {  
        type: String,
        // required: true
    },
    higieneDental: {  
        type: String,
        // required: true
    },
    problemaTratamiento: {  
        type: String,
        // required: true
    },
    //
    observaciones: {  
        type: String,
        // required: true
    },
    //
    motivoConsulta: {  
        type: String,
        // required: true
    },
    //
    examenClinico: {  
        type: String,
        // required: true
    },
    //
    diagnostico: {  
        type: String,
        // required: true
    },
});

module.exports = mongoose.model('Paciente', PacienteSchema);