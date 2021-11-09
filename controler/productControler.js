const eMsg = require('../util/eMsg');
const asyncHdl = require('../util/asyncHdl');
const Product = require('../model/Product');


/**
*	@GET
*	/api/v1/product/:id
*	Public
*/
exports.getSingleProduct = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	const product = await Product.findById(id).populate('category');

	res.status(200).json({
		success: true,
		product,
	})
});


/**
*	@GET
*	/api/v1/product/new
*	Public
*/
exports.getNewProducts = asyncHdl(async (req, res, next) => {
	const products = await Product.find().sort('-created').limit(12).populate('category');

	res.status(200).json({
		success: true,
		total: products.length,
		products,
	})
});



/**
*	@GET
*	/api/v1/product/featured
*	Public
*/
exports.getFeaturedProducts = asyncHdl(async (req, res, next) => {
	const products = await Product.find({featured: true}).sort('-created').limit(6).populate('category');

	res.status(200).json({
		success: true,
		total: products.length,
		products,
	})
});


/**
*	@GET
*	/api/v1/product/category/:id
*	Public
*/
exports.getProductsByCategory = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	const limitVal = (req.query?.limit * 1) || 10;
	const skipVal = (req.query?.page * limitVal) || 0;

	const total = await Product.find({category: id});

	console.log(id, limitVal, skipVal)
	const products = await Product.find({category: id}).populate('category').sort('-created').limit(limitVal).skip(skipVal);

	res.status(200).json({
		success: true,
		total: total.length,
		products,
	})
});


/**
*	@PUT
*	/api/v1/product/add-review/:id
*	Private
*/
exports.addReview = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	const { ratting, message } = req.body;
	const userId = req.user.id;
	const userName = req.user.name;

	// Get targeted product
	const targetedProduct = await Product.findById(id);

	let updatedField = {};
	updatedField.reviews = [...targetedProduct.reviews, {ratting, userId, userName, message}];

	const product = await Product.findByIdAndUpdate(id, {$set: updatedField}, {new: true});

	res.status(200).json({
		success: true,
		message: 'Review Add Successfull.',
		product,
	})
});


/**
*	@GET
*	/api/v1/product/search/:query
*	Private
*/
exports.searchedProducts = asyncHdl(async (req, res, next) => {
	const {query} = req.params;
	const limitVal = (req.query?.limit * 1) || 10;
	const skipVal = (req.query?.page * limitVal) || 0;

	// Get targeted product
	const total = await Product.find({
		$or : [
			{title: {$regex : query}},
			{shortDescription : {$regex : query}}
		]
	});

	// Get targeted product
	const products = await Product.find({
		$or : [
			{title: {$regex : query}},
			{shortDescription : {$regex : query}}
		]
	}).populate('category').sort('-created').limit(limitVal).skip(skipVal);

	console.log(total.length, products.length);

	res.status(200).json({
		success: true,
		total: total.length,
		products,
	})
});


/**
 * *********************************************
 * 					For Admin Section
 * *********************************************
 */

/**
*	@POST
*	/api/v1/product
*	Limited
*/
exports.createProduct = asyncHdl(async (req, res, next) => {
	const { title, featured, category, price, discount, quantity, shortDescription, description } = req.body;

	console.log(req.files.image, req.files.images);

	// Handling file
	if(Object.keys(req.files) && !req.files?.image) {
		return next(new eMsg('A Product image is required.', 401))
	};
	let image = req.files.image[0].filename;
	let images = [];
	req.files.images.forEach(img => images.push(img.filename));

	// Create product 
	const product = await Product.create({
		title,
		featured,
		category,
		price,
		discount,
		quantity,
		image,
		images,
		shortDescription,
		description,
	});

	res.status(201).json({
		success: true,
		message: 'New Product Created.',
		product,
	})
});




/**
*	@GET
*	/api/v1/product
*	Limited
*/
exports.getProducts = asyncHdl(async (req, res, next) => {
	const products = await Product.find().sort('-created').populate('category');

	res.status(200).json({
		success: true,
		total: products.length,
		products,
	})
});


/**
*	@DELETE
*	/api/v1/product/:id
*	Limited
*/
exports.deleteProduct = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	await Product.findByIdAndDelete(id);

	res.status(200).json({
		success: true,
		message: 'Product has been deleted.',
	})
});


/**
*	@PUT
*	/api/v1/product/:id
*	Limited
*/
exports.updateProduct = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	const { title, featured, category, price, discount, quantity, shortDescription, description } = req.body;
	let updatedField = {};

	if(title) updatedField.title = title;
	if(featured) updatedField.featured = featured;
	if(category) updatedField.category = category;
	if(price) updatedField.price = price;
	if(discount) updatedField.discount = discount;
	if(quantity) updatedField.quantity = quantity;
	if(shortDescription) updatedField.shortDescription = shortDescription;
	if(description) updatedField.description = description;

	// Handling file
	if(req.files?.image && req.files.image.length !== 0) updatedField.image = req.files.image[0].filename;
	if(req.files?.images && req.files.images.length !== 0) updatedField.images = req.files.images.map(img => img.filename);

	// Update porduct
	const product = await Product.findByIdAndUpdate(id, {$set: updatedField}, {new: true});

	res.status(200).json({
		success: true,
		message: 'Product updated successfull,',
		product,
	})
});