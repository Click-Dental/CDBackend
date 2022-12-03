const Dentista = require("../models/Dentista");


exports.crearDentista = async (req, res) => {

    try {
        let dentista;

        dentista = new Dentista(req.body);

        await dentista.save();
        res.send(dentista);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerDentistas = async (req, res) => {

    try {

        const dentistas = await Dentista.find();
        res.json(dentistas)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarDentista = async (req, res) => {

    try {
        const { nombre, especialidad, listaPacientes } = req.body;
        let dentista = await Dentista.findById(req.params.id);

        if(!dentista) {
            res.status(404).json({ msg: 'No existe el dentista' })
        }

        dentista.nombre = nombre;
        dentista.especialidad = especialidad;
        dentista.listaPacientes = listaPacientes;
    
        dentista = await Dentista.findOneAndUpdate({ _id: req.params.id },dentista, { new: true} )
        res.json(dentista);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerDentista = async (req, res) => {

    try {
        let dentista = await Dentista.findById(req.params.id);

        if(!dentista) {
            res.status(404).json({ msg: 'No existe el dentista' })
        }
       
        res.json(dentista);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarDentista = async (req, res) => {

    try {
        let dentista = await Dentista.findById(req.params.id);

        if(!dentista) {
            res.status(404).json({ msg: 'No existe el dentista' })
        }
       
        await Dentista.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'dentista eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.asignarPaciente = async (req, res) => {

    try {
        const { paciente } = req.body;
        let dentista = await Dentista.findById(req.params.id);

        if(!dentista) {
            res.status(404).json({ msg: 'No existe el paciente' })
        }

        dentista.listaPacientes = paciente;
    
        dentista = await Dentista.findByIdAndUpdate({ _id: req.params.id },dentista, { new: true} )
        res.json(dentista);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

    // const paciente = req.body;
    // const dentista = await Dentista.findById(req.params.id);
    
    // paciente.Dentista = dentista;
    
    // await paciente.save();
    // dentista.listaPacientes.push(paciente);
    // await dentista.save();
    // res.send(paciente);

}

