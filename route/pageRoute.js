const express = require('express');
const { private, limited } = require('../middleware/auth');
const { createPage, getPage, updatePage, deletePage, getPages } = require('../controler/pageControler');
const router = express.Router();

router.route('/').post(private, limited, createPage).get(getPages);
router.route('/:slug').get(getPage).put(private, limited, updatePage).delete(private, limited, deletePage);

module.exports = router;