const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 4,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		minLength: 10,
	},
	password: {
		type: String,
		required: true,
		minLength: 6,
		maxLength: 16,
	},
	gravatar: String,
	avatar: String,
	phone: String,
	age: {
		type: Number,
		min: 18,
		max: 100,
	},
	sex: {
		type: String,
		enum: ['male', 'female', 'others'],
		default: 'male',
	},
	type: {
		type: String,
		enum: ['user'],
		default: 'user',
	},
	contact: {
		address1: {
			type: String,
			default: '',
		},
		address2: {
			type: String,
			default: '',
		},
		city: {
			type: String,
			default: '',
		},
		country: {
			type: String,
			default: '',
		},
		zipCode: {
			type: Number,
			default: 1,
		},
	},
	created: {
		type: Date,
		default: Date.now
	}
})

userSchema.pre('save', async function(next) {
	this.password = await bcrypt.hash(this.password, 12);
})

const User = mongoose.model('User', userSchema);
module.exports = User;