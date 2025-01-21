const express = require('express');
const { initializePayment } = require('../controllers/paymentController');

const router = express.Router();

router.post('/initialize', initializePayment);

module.exports = router;