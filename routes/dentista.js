// Rutas para dentista
const express = require('express');
const router = express.Router();
const dentistaController = require('../controllers/dentistaController');

// api/dentista
router.post('/', dentistaController.crearDentista);
router.get('/', dentistaController.obtenerDentistas);
router.put('/:id', dentistaController.actualizarDentista);
router.get('/:id', dentistaController.obtenerDentista);
router.delete('/:id', dentistaController.eliminarDentista);
router.put('/asignarPaciente/:id', dentistaController.actualizarDentista);

module.exports = router;