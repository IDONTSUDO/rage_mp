const mongoose = require('mongoose');
const ChaptersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  InventoryId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Inventorys',
  },
  OwnerShipId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'OwnerShips',
  },
  FractionId: {
    type: mongoose.Types.ObjectId,
    required: true,
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
});
module.exports = mongoose.model('Chapter', ChaptersSchema);
