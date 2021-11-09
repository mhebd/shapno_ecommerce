const eMsg = require('../util/eMsg');

module.exports = (err, req, res, next) => {
	err ? console.log(err) : null;
	let message = err.message || 'SERVER ERROR';
	let status = err.status || 500;

	res.status(status).json({
		success: false,
		message,
	});
	next();
};