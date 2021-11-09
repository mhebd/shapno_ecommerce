const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: 12,
	},
	featured: {
		type: Boolean,
		default: false,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	price: {
		type: Number,
		required: true,
		min: 1,
	},
	discount: {
		type: Number,
		required: true,
		min: 0,
		max: 100,
	},
	quantity: {
		type: Number,
		required: true,
		min: 0,
	},
	image: {
		type: String,
		required: true,
	},
	images: [String],
	shortDescription: String,
	description: String,
	public: {
		type: Boolean,
		default: true,
	},
	reviews: [{
		ratting: {
			type: Number,
			min: 1,
			max: 5,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
		},
		userName: String,
		message: {
			type: String,
			required: true,
			maxLength: 150,
		},
		created: {
			type: Date,
			default: Date.now
		}
	}],
	created: {
		type: Date,
		default: Date.now
	}
});

productSchema.virtual('discountPrice').get(function() {
  return Math.ceil(this.price - ((this.discount / 100) * this.price));
});

productSchema.virtual('avarageRatting').get(function() {
	if(this.reviews.length !== 0) {
		const rattings = this.reviews.map(rev => rev.ratting);
		const rattingSum =  rattings.reduce((s, r) => r + s, 0);
  	return (rattingSum / rattings.length).toFixed(1);
	} else {
		return 0;
	}
});

productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;