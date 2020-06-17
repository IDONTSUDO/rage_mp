const mongoose = require('mongoose');
const InventoryAbstractSchema = new mongoose.Schema({
  main: {
    type: Object,
    default: {},
  },
  Owner: {
    type: mongoose.Types.ObjectId,
  },
  InventoryType: {
    type: String,
    required: true,
  },
  capacity: {
    type: Object,
    required: true,
  },
});
module.exports = mongoose.model('InventoryAbstract', InventoryAbstractSchema);
