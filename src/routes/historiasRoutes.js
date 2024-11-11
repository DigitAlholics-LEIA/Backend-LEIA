const express = require('express');
const router = express.Router();
const historiaDeExitoController = require('../controllers/historiasController');

router.post('/', historiaDeExitoController.createHistoria);
router.get('/', historiaDeExitoController.getHistorias);

module.exports = router;
