const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

/*
| Field | Type | Description |
| aircraft | String | Show aircraft |
| firstclass_seats | Number | Show first class seats |
| business_seats | Number | Show business seats |
| economy_seats | Number | Show economy seats |
*/

const aircraftSchema = new mongoose.Schema({
  aircraft: String,
  firstclass_seats: Number,
  business_seats: Number,
  economy_seats: Number,
});

aircraftSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Aircraft', aircraftSchema);
