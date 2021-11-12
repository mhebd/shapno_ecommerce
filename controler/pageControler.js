const eMsg = require('../util/eMsg');
const asyncHdl = require('../util/asyncHdl');
const Page = require('../model/Page');
const slugify = require('slugify');


/**
*	@GET 
*	/api/v1/page/:slug
*	Private
*/
exports.getPage = asyncHdl(async (req, res, next) => {
  const { slug } = req.params;

  const page = await Page.findOne({ slug });

	res.status(201).json({
		success: true,
		page,
	})
});



/**
*	@GET 
*	/api/v1/pages
*	Private
*/
exports.getPages = asyncHdl(async (req, res, next) => {
  const pages = await Page.find().select('-content').sort('-created');

	res.status(201).json({
		success: true,
		pages,
	})
});


// ADMIN SECTION

/**
*	@POST 
*	/api/v1/page
*	Private
*/
exports.createPage = asyncHdl(async (req, res, next) => {
  const { title, content } = req.body;

  if(!title || !content) {
    return next(new eMsg('Title and content is required to create a page', 400));
  };

  const slug = slugify(title, {lower: true});

  const page = await Page.create({
    title,
    slug,
    content,
  });

	res.status(201).json({
		success: true,
		message: 'Page created successful.',
		page,
	})
});



/**
*	@PUT 
*	/api/v1/page/:slug
*	Private
*/
exports.updatePage = asyncHdl(async (req, res, next) => {
  const {slug} = req.params;
  const { title, content } = req.body;

  let updatedField = {};

  if(title) updatedField.title = title;
  if(content) updatedField.content = content;

  const page = await Page.findOneAndUpdate({slug}, {
    $set: updatedField,
  }, {new: true});

	res.status(201).json({
		success: true,
		message: 'Page updated successful.',
		page,
	})
});



/**
*	@DELETE 
*	/api/v1/page/:slug
*	Private
*/
exports.deletePage = asyncHdl(async (req, res, next) => {
  const {slug} = req.params;

  await Page.findOneAndDelete({slug});

	res.status(201).json({
		success: true,
		message: 'Page deleted successful.',
	})
});
