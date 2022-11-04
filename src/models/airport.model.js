const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

/*

| Field | Type | Description |
| airport code | String | Show air ports code |
| airport name | String | Show air ports name |
| city | String | Show air ports city |
| country | String | Show air ports country |

*/

const airportSchema = new mongoose.Schema({
  airportCode: String,
  airportName: String,
  city: String,
  country: String,
});

airportSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Airport', airportSchema);
