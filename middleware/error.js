const eMsg = require('../util/eMsg');

module.exports = (err, req, res, next) => {
	err ? console.log(err) : null;
	let message = err.message || 'SERVER ERROR';
	let status = err.status || 500;

	if(err.code === 11000) {
		const field = Object.keys(err.keyValue)[0];
		message = `Duplicate key found on field "${field}" and value "${err.keyValue[field]}" `;
	}

	res.status(status).json({
		success: false,
		message,
	});
	next();
};