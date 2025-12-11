const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrder);
router.post('/:id/confirm', orderController.confirmOrder);

module.exports = router;