const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const toJSON = require('./plugins/toJSON.plugin');

/*
| Field | Type | Description |
| aircraft | String | Show aircraft |
| firstclass_seats | Number | Show first class seats |
| business_seats | Number | Show business seats |
| economy_seats | Number | Show economy seats |
*/

const aircraftSchema = new mongoose.Schema({
  aircraft: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  firstclass_seats: Number,
  business_seats: Number,
  economy_seats: Number,
});

aircraftSchema.plugin(toJSON);
aircraftSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Aircraft', aircraftSchema);
