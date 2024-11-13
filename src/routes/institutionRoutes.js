const express = require('express');
const router = express.Router();
const institutionController = require('../controllers/InstitutionController');

router.post('/', institutionController.createInstitution);
router.get('/', institutionController.getInstitution);
router.get('/getBySpecialityId/:id', institutionController.getInstitutionBySpecialityId);

module.exports = router;
