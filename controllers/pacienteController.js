const Paciente = require("../models/Paciente");


exports.crearPaciente = async (req, res) => {

    try {
        let paciente;

        paciente = new Paciente(req.body);

        await paciente.save();
        res.send(paciente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPacientes = async (req, res) => {

    try {

        const pacientes = await Paciente.find();
        res.json(pacientes)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPaciente = async (req, res) => {

    try {
        const { nhc, codigo, apellidoPaterno, apellidoMaterno, nombres, edad, sexo, lugarNacimiento, fechaNacimiento, ocupacion, direccion, celular } = req.body;
        let paciente = await Paciente.findById(req.params.id);

        if(!paciente) {
            res.status(404).json({ msg: 'No existe el paciente' })
        }

        paciente.nhc = nhc;
        paciente.codigo = codigo;
        paciente.apellidoPaterno = apellidoPaterno;
        paciente.apellidoMaterno = apellidoMaterno;
        paciente.nombres = nombres;
        paciente.edad = edad;
        paciente.sexo = sexo;
        paciente.lugarNacimiento = lugarNacimiento;
        paciente.fechaNacimiento = fechaNacimiento;
        paciente.ocupacion = ocupacion;
        paciente.direccion = direccion;
        paciente.celular = celular;

        paciente = await Paciente.findOneAndUpdate({ _id: req.params.id },paciente, { new: true} )
        res.json(paciente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerPaciente = async (req, res) => {

    try {
        let paciente = await Paciente.findById(req.params.id);

        if(!paciente) {
            res.status(404).json({ msg: 'No existe el paciente' })
        }
       
        res.json(paciente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarPaciente = async (req, res) => {

    try {
        let paciente = await Paciente.findById(req.params.id);

        if(!paciente) {
            res.status(404).json({ msg: 'No existe el paciente' })
        }
       
        await Paciente.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'paciente eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}