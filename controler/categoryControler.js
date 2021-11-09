const eMsg = require('../util/eMsg');
const asyncHdl = require('../util/asyncHdl');
const Category = require('../model/Category');
const Product = require('../model/Product');

/**
*	@POST
*	/api/v1/category
*	Limited
*/
exports.createCategory = asyncHdl(async (req, res, next) => {
	const {name, icon, color} = req.body;

	// Create category
	const category = await Category.create({
		name,
		icon,
		color,
	});

	res.status(201).json({
		success: true,
		message: 'Category Created Successfull',
		category,
	})
});


/**
*	@GET
*	/api/v1/category
*	Public
*/
exports.getCategories = asyncHdl(async (req, res, next) => {
	const categories = await Category.find().sort('-created');

	res.status(200).json({
		success: true,
		total: categories.length,
		categories,
	})
});


/**
*	@GET
*	/api/v1/category/id
*	Limited
*/
exports.getCategory = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	const category = await Category.findById(id);

	res.status(200).json({
		success: true,
		category,
	})
});


/**
*	@PUT
*	/api/v1/category/:id
*	Limited
*/
exports.updateCategory = asyncHdl(async (req, res, next) => {
	const {id} = req.params;
	const { name, icon, color } = req.body;

	// Set category new field
	let updatedField = {};
	if(name) updatedField.name = name;
	if(icon) updatedField.icon = icon;
	if(color) updatedField.color = color;

	// Update category
	const category = await Category.findByIdAndUpdate(id, {$set: updatedField}, {new: true})
	
	res.status(200).json({
		success: true,
		message: 'Category updated success.',
		category,
	})
});


/**
*	@DELETE
*	/api/v1/category/:id
*	Limited
*/
exports.deleteCategory = asyncHdl(async (req, res, next) => {
	const {id} = req.params;

	// Get products by category
	const products = await Product.find({category : id});

	// Delete product for this category
	products.forEach(async(prod) => await Product.findByIdAndDelete(prod._id) );

	// Delete category 
	await Category.findByIdAndDelete(id);

	res.status(200).json({
		success: true,
		message: 'Category has been deleted.',
	})
});