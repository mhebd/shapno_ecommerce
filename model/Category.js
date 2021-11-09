const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minLength: 4
	},
	icon: {
		type: String,
		lowercase: true,
		trim: true,
	},
	color: String,
	created: {
		type: Date,
		default: Date.now,
	}
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;