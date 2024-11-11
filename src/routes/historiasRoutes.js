const express = require('express');
const router = express.Router();
const historiaDeExitoController = require('../controllers/historiasController');

router.post('/', historiaDeExitoController.createHistoriaDeExito);
router.get('/', historiaDeExitoController.getHistoriasDeExito);
router.get('/:id', historiaDeExitoController.getHistoriaDeExitoById);
router.put('/:id', historiaDeExitoController.updateHistoriaDeExito);
router.delete('/:id', historiaDeExitoController.deleteHistoriaDeExito);

module.exports = router;
