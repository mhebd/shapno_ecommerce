const mongoose = require('mongoose');
const cartitemSchema = mongoose.Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Product',
	},
	quantity: {
		type: Number,
		min: 1,
		default: 1,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	created: {
		type: Date,
		default: Date.now,
	}
});

const Cartitem = mongoose.model('Cartitem', cartitemSchema);
module.exports = Cartitem;