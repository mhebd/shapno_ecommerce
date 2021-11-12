const mongoose = require('mongoose');
const settingSchema = mongoose.Schema({
  siteName: {
    type: String,
    required: true,
  },
  logo: String,
  userBaseStyle: {
    forground: {
      type: String,
      default: '#ffa500',
    },
    background: {
      type: String,
      default: '#fefefe',
    },
    link: {
      type: String,
      default: '#229944',
    },
    header: {
      type: String,
      default: '#333e4f',
    },
  },
  adminBaseStyle: {
    forground: {
      type: String,
      default: '#f5f5f5',
    },
    background: {
      type: String,
      default: '#333333',
    },
    main: {
      type: String,
      default: '#113cfc',
    },
    header: {
      type: String,
      default: '#000080',
    },
    footer: {
      type: String,
      default: '#008080',
    },
  },
  mainMenu: [{
    text: String,
    link: String,
  }],
  footerMenu: [{
    text: String,
    link: String,
  }],
  socialMenu: [{
    link: String,
    icon: String,
  }],
  homeCategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  }],
  contactAddress: String,
  created: {
    type: Date,
    default: Date.now
  }
});

const Setting = mongoose.model('Setting', settingSchema);
module.exports = Setting;