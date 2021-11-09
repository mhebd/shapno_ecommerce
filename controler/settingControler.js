const eMsg = require('../util/eMsg');
const asyncHdl = require('../util/asyncHdl');
const Setting = require('../model/Setting');

/**
*	@POST
*	/api/v1/setting
*	Limited
*/
exports.createSetting = asyncHdl(async (req, res, next) => {
	const { siteName, logo, contactAddress, mainMenu, footerMenu, socialMenu, userBaseStyle, adminBaseStyle, homeCategories } = req.body;

  if(!siteName) {
    return next(new eMsg('Site name is required', 400));
  };

	// Chack the setting already created
	let setting = await Setting.find();
	if(setting.length > 0 ) {
    const {_id} = setting[0];
    console.log(_id)
    // track updated field
    let updatedField = {};
    if(siteName) updatedField.siteName = siteName;
    if(logo) updatedField.logo = logo;
    if(contactAddress) updatedField.contactAddress = contactAddress;
    if(mainMenu) updatedField.mainMenu = mainMenu;
    if(footerMenu) updatedField.footerMenu = footerMenu;
    if(socialMenu) updatedField.socialMenu = socialMenu;
    if(userBaseStyle) updatedField.userBaseStyle = userBaseStyle;
    if(adminBaseStyle) updatedField.adminBaseStyle = adminBaseStyle;
    if(homeCategories) updatedField.homeCategories = homeCategories;

		// Update Setting
    setting = await Setting.findByIdAndUpdate(_id, {
      $set: updatedField,
    }, {
      new: true,
    })

	} else {
    // Create Setting
    setting = await Setting.create({ 
      siteName, 
      logo, 
      contactAddress, 
      mainMenu, 
      footerMenu, 
      socialMenu, 
      userBaseStyle, 
      adminBaseStyle 
    })
  }

	res.status(201).json({
		success: true,
		message: 'Setting Updated successfully.',
		setting,
	})
});




/**
*	@GET
*	/api/v1/setting
*	Limited
*/
exports.getSetting = asyncHdl(async (req, res, next) => {
	// get the setting 
	let setting = await Setting.find();

	res.status(201).json({
		success: true,
		message: 'Setting Updated successfully.',
		setting,
	})
});