const express = require('express');
const multer = require('multer');
const path = require('path');
const { private, limited } = require('../middleware/auth');
const { createUser, loginUser, getUser, getUserById, updateUser, deleteUser, changeAvatar, getAllUser, deleteUserByAdmin } = require('../controler/userControler');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../client/public/uploads/user'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

router.route('/signup').post(createUser);
router.route('/all').get(private, limited, getAllUser);
router.route('/change-avatar').put(private, upload.single('avatar'), changeAvatar);
router.route('/').post(loginUser).get(private, getUser).put(private, updateUser).delete(private, deleteUser);
router.route('/:id').get(private, getUserById).delete(private, limited, deleteUserByAdmin);

module.exports = router;