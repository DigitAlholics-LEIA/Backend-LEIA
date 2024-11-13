const express = require('express');
const router = express.Router();
const specialtyController = require('../controllers/specialityController');

router.post('/', specialtyController.createSpecialty);
router.get('/', specialtyController.getSpecialty);

module.exports = router;