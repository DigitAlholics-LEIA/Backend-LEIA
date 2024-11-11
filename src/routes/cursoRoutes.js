const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.post('/', cursoController.createCurso);
router.get('/', cursoController.getCursos);

module.exports = router;
