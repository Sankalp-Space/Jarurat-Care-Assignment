const express = require('express');
const router = express.Router();
const { addService, getAllServices, updateService, deleteService } = require('../controllers/servicesControllers');

router.post('/services', addService);
router.get('/services', getAllServices);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

module.exports = router;
