const mongoose = require('mongoose');
const pageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    trim: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;