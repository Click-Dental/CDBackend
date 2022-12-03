const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();
const port = process.env.PORT || 4000
// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/pacientes', require('./routes/paciente'));
app.use('/api/dentistas', require('./routes/dentista'));
app.use('/api', require('./routes/user'));

app.listen(port, () => {
    console.log('El servidor esta corriendo perfectamente')
})