const mongoose = require('mongoose');
const ChaptersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  InventoryId: {
    type: mongoose.Types.ObjectId,
    // required: true,
    ref: 'Inventory',
  },
  OwnerShipId: {
    type: mongoose.Types.ObjectId,
    // required: true,
    ref: 'OwnerShips',
  },
  FractionId: {
    type: mongoose.Types.ObjectId,
    ref: 'Fractions',
  },
  ActiveTask: {
    type: mongoose.Types.ObjectId,
  },
  appereance: {
    type: Array,
    // todo
    default: [],
  },
  skils: {
    type: Array,
    default: [],
    // todo
  },
  serverid: {
    type: Number,
    default: 0,
  },
  nativeipaddress: {
    type: String,
    // Todo
  },
  cashmoney: {
    type: Number,
    // todo
  },
  donatemoney: {
    type: Number,
  },
  playerlvl: {
    type: Number,
  },
  adminlvl: {
    type: Number,
  },
  viplvl: {
    type: Number,
  },
  LastLoginTime: {
    type: String,
  },
  lastChapterState: {
    type: Object,
    expires: 7200,
  },
  serteficats: {
    type: Array,
    // todo
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
});
module.exports = mongoose.model('Chapter', ChaptersSchema);
