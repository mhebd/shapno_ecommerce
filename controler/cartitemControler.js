const eMsg = require('../util/eMsg');
const asyncHdl = require('../util/asyncHdl');
const Cartitem = require('../model/Cartitem');

/**
*	@POST
*	/api/v1/cartitem
*	Private
*/
exports.createCartItem = asyncHdl(async (req, res, next) => {
	const { product, quantity } = req.body;
	const user = req.user.id;

	// Chack the item already added
	const hasItem = await Cartitem.findOne({product, user});
	if(hasItem) {
		return next(new eMsg('This product already added to your cart.', 401));
	};

	// Create cart item
	const cartitem = await Cartitem.create({
		product,
		quantity,
		user,
	});

	res.status(201).json({
		success: true,
		message: 'Porduct added successfully.',
		cartitem,
	})
});


/**
*	@GET
*	/api/v1/cartitem
*	Private
*/
exports.getCartItems = asyncHdl(async (req, res, next) => {
	const user = req.user.id;
	const cartitems = await Cartitem.find({ user }).sort('-created').populate('product');

	res.status(200).json({
		success: true,
		total: cartitems.length,
		cartitems,
	})
});


/**
*	@PUT
*	/api/v1/cartitem/:id
*	Private
*/
exports.updateCartitem = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	const {quantity} = req.body;

	// Update cart item 
	const cartitem = await Cartitem.findByIdAndUpdate(id, {$set: {quantity}}, {new: true});

	res.status(200).json({
		success: true,
		cartitem,
	})
});



/**
*	@DELETE
*	/api/v1/cartitem/:id
*	Private
*/
exports.deleteCartitem = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	await Cartitem.findByIdAndDelete(id);

	res.status(200).json({
		success: true,
		message: 'Cart item has been deleted.'
	})
});
