const express = require('express');
const dotenv = require('dotenv').config({path: 'config/.env'});
const morgan = require('morgan');
const cors = require('cors');
const database = require('./db/database');
const error = require('./middleware/error');
const multer = require('multer');
const path = require('path');

// Routes Path
const settingRoute = require('./route/settingRoute');
const userRoute = require('./route/userRoute');
const categoryRoute = require('./route/categoryRoute');
const productRoute = require('./route/productRoute');
const cartitemRoute = require('./route/cartitemRoute');
const orderRoute = require('./route/orderRoute');
const pageRoute = require('./route/pageRoute');

// Create Server
const app = express();

// Use MiddleWare
app.use(morgan('dev'))
app.use(cors());
app.use(express.json())
// app.use(multer());

// Add Database
database();

// Route End Point
app.use('/api/v1/setting', settingRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/cartitem', cartitemRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/page', pageRoute);

// Set Routting 
if(process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req,  res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ))
	});
} else if(process.env.NODE_ENV === 'development') {
	app.get('/', (req, res) => {
		res.send('Hello, Developer...')
	});
}

// Show Error Message
app.use(error);

// Listening Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log(`Server is running on port ${PORT}`);
	}
})
