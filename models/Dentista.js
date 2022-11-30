const mongoose = require('mongoose');

const DentistaSchema = mongoose.Schema({
    //datos personales
    nombre: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    listaPacientes: {
        type: Array,
        required: true
    },
});

module.exports = mongoose.model('Dentista', DentistaSchema);