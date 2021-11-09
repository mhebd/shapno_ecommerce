const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
	orderItems: [{
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},
		quantity: Number,
	}],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	status: {
		type: String,
		default: 'Created',
	},
	totalPrice: {
		type: Number,
		required: true,
	},
	created: {
		type: Date,
		default: Date.now,
	}
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;