const express = require('express');
const { private, limited } = require('../middleware/auth');
const { createCartItem, getCartItems, updateCartitem, deleteCartitem } = require('../controler/cartitemControler');
const router = express.Router();

router.route('/').post(private, createCartItem).get(private, getCartItems);
router.route('/:id').put(private, updateCartitem).delete(private, deleteCartitem);

module.exports = router;