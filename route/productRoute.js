const express = require('express');
const multer = require('multer');
const path = require('path');
const {private, limited} = require('../middleware/auth');
const { createProduct, getProducts, getNewProducts, getFeaturedProducts, getProductsByCategory, getSingleProduct, updateProduct, deleteProduct, addReview, searchedProducts } = require('../controler/productControler');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../client/public/uploads/product'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

router.route('/new').get(getNewProducts);
router.route('/featured').get(getFeaturedProducts);
router.route('/search/:query').get(searchedProducts);
router.route('/category/:id').get(getProductsByCategory);
router.route('/add-review/:id').put(private, addReview);
router.route('/').post(
		private,
		limited,
		upload.fields([
			{
				name: 'image',
				maxCount: 1,
			},
			{
				name: 'images',
				maxCount: 4,
			}
		]),
		createProduct
	).get(private, limited, getProducts);
router.route('/:id').get(getSingleProduct).put(
		private, 
		limited, 
		upload.fields([
				{
					name: 'image',
					maxCount: 1,
				},
				{
					name: 'images',
					maxCount: 4,
				}
			]),
		updateProduct
	).delete(private, limited, deleteProduct);

module.exports = router;