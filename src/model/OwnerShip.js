const mongoose = require('mongoose');
const AbstractOwnerShipSchema = new mongoose.Schema({
  main: {
    type: Object,
    default: {},
  },
  Owner: {
    type: mongoose.Types.ObjectId,
  },
  OwnerShipType: {
    type: String,
    required: true,
  },
  capacity: {
    type: Object,
    required: true,
  },
});
module.exports = mongoose.model('AbstractOwnerShip', AbstractOwnerShipSchema);
