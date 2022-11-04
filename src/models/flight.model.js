const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

/*
| Field | Type | Description |
| flight number | String | Show flight number |
| aircraft | ObjectId | Show aircraft |
| departure airport | ObjectId | Show departure airport |
| arrival airport | String | Show arrival airport |
| departure time | Date | Show departure time |
| arrival time | Date | Show arrival time |
| price | Number | Show price |
| seats available | Array | Show seats available |
| airline | String | Show airline |
*/

const flightSchema = new mongoose.Schema({
  flightNumber: String,
  aircraft: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Aircraft',
  },
  departureAirport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Airport',
  },
  arrivalAirport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Airport',
  },
  departureTime: Date,
  arrivalTime: Date,
  price: String,
  seatsAvailable: Array,
  airline: String,
});

flightSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Flight', flightSchema);
