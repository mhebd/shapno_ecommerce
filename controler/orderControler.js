const eMsg = require('../util/eMsg');
const asyncHdl = require('../util/asyncHdl');
const Order = require('../model/Order');
const Cartitem = require('../model/Cartitem');


/**
*	@POST 
*	/api/v1/order
*	Private
*/
exports.createOrder = asyncHdl(async (req, res, next) => {
	const user = req.user.id;
	const { shippingCharge } = req.body;
	console.log(req.body)

	// Get all cart item
	const cartitems = await Cartitem.find({user}).sort('-created').populate('product');
	if(cartitems.length === 0) {
		return next(new eMsg('You have not selected any product.', 404));
	};

	// Create total price
	const totalPrice = cartitems.reduce((s, i) => s + (i.product.discountPrice * i.quantity), shippingCharge);

	const orderItems = cartitems.map(item => {
		return {
			product: item.product._id,
			quantity: item.quantity,
		}
	});

	console.log(orderItems)

	// Create order
	const order = await Order.create({
		orderItems,
		totalPrice,
		user,
	});

	// Delete cartitems
	cartitems.forEach(async item => {
		await Cartitem.findByIdAndDelete(item._id)
	})

	res.status(201).json({
		success: true,
		message: 'Order created successful.',
		order,
	})
});


/**
*	@GET
*	/api/v1/order/:id
*	Limited
*/
exports.getOrder = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	const order = await Order.findById(id).populate([{
		path: 'orderItems',
		populate: {
			path: 'product',
			model: 'Product',
		}
	}]).populate('user');

	res.status(200).json({
		success: true,
		order,
	})
});




/**
*	@GET
*	/api/v1/order/user
*	Limited
*/
exports.getUserOrders = asyncHdl(async (req, res, next) => {
	const user = req.user.id;
	const orders = await Order.find({user}).sort('-created').populate('user');

	res.status(200).json({
		success: true,
		orders,
	})
});


/**
 * ********************************************
 * 				For Admin Seciton
 * ********************************************
 */

/**
*	@GET
*	/api/v1/order
*	Limited
*/
exports.getOrders = asyncHdl(async (req, res, next) => {
	const orders = await Order.find().sort('-created').populate('user');

	res.status(200).json({
		success: true,
		orders,
	})
});


/**
*	@PUT
*	/api/v1/order/:id
*	Limited
*/
exports.updateOrder = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	const {status} = req.body;

	// Update order
	const order = await Order.findByIdAndUpdate(id, {$set: {status}}, {new: true});

	res.status(200).json({
		success: true,
		message: 'Order updated successfull',
		order,
	})
});



/**
*	@DELETE
*	/api/v1/order/:id
*	Limited
*/
exports.deleteOrder = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	await Order.findByIdAndDelete(id);

	res.status(200).json({
		success: true,
		message: 'Order has been deleted.',
	})
});