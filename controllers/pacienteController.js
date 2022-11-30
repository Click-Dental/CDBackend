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
        const { nhc, codigo, apellidoPaterno, 
            apellidoMaterno, nombres, edad, sexo, 
            lugarNacimiento, fechaNacimiento, 
            ocupacion, direccion, celular, antecedentesPatologicosFamiliares,
            antecedentesPatologicosPersonales, atm, ganglioslinfaticos, respirador,
            otrosExamenExtraOral, labios, lengua, paladar, pisoDeLaBoca, mucosaYugal,
            encias, fechaUltimaVisita, habitos, protesis, cepillo, hilo, enjuague,
            frecuenciaCepillado, sangreEncias, higieneDental, problemaTratamiento, observaciones,
            motivoConsulta, examenClinico, diagnostico} = req.body;
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

        paciente.antecedentesPatologicosFamiliares = antecedentesPatologicosFamiliares;
        paciente.antecedentesPatologicosPersonales = antecedentesPatologicosPersonales;
        paciente.atm = atm;
        paciente.ganglioslinfaticos = ganglioslinfaticos;
        paciente.respirador = respirador;
        paciente.otrosExamenExtraOral = otrosExamenExtraOral;
        
        paciente.labios = labios;
        paciente.lengua = lengua;
        paciente.paladar = paladar;
        paciente.pisoDeLaBoca = pisoDeLaBoca;
        paciente.mucosaYugal = mucosaYugal;
        paciente.encias = encias;

        paciente.fechaUltimaVisita = fechaUltimaVisita;
        paciente.habitos = habitos;
        paciente.protesis = protesis;

        paciente.cepillo = cepillo;
        paciente.hilo = hilo;
        paciente.enjuague = enjuague;
        paciente.frecuenciaCepillado = frecuenciaCepillado;
        paciente.sangreEncias = sangreEncias;
        paciente.higieneDental = higieneDental;
        paciente.problemaTratamiento = problemaTratamiento;

        paciente.observaciones = observaciones;
        paciente.motivoConsulta = motivoConsulta;
        paciente.examenClinico = examenClinico;
        paciente.diagnostico = diagnostico;

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