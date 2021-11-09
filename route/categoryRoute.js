const express = require('express');
const {private, limited} = require('../middleware/auth');
const { createCategory,getCategories, updateCategory, deleteCategory, getCategory } = require('../controler/categoryControler');
const { get } = require('mongoose');
const router = express.Router();

router.route('/').post(private, limited, createCategory).get(getCategories);
router.route('/:id').get(private, limited, getCategory).put(private, limited, updateCategory).delete(private, limited, deleteCategory)

module.exports = router;