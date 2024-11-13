const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');

router.post('/', historyController.createHistory);
router.get('/', historyController.getHistory);
router.get('/getByInstituteId/:id', historyController.getHistoryByInstitutionId);

module.exports = router;
