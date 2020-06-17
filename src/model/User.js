const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
  },
  chapters: {
    type: Array,
    default: [],
    ref: 'Chapter',
  },
  SocialClubId: {
    type: Number,
  },
});
module.exports = mongoose.model('User', UserSchema);
