const express = require('express');
const { private, limited } = require('../middleware/auth');
const { createOrder, getOrders, updateOrder, deleteOrder, getUserOrders, getOrder } = require('../controler/orderControler');
const router = express.Router();

router.route('/user').get(private, getUserOrders);
router.route('/').post(private, createOrder).get(private, limited, getOrders);
router.route('/:id').get(private, getOrder).put(private, limited, updateOrder).delete(private, limited, deleteOrder);

module.exports = router;