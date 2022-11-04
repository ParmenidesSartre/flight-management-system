const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

/*
| Field | Type | Description |
| booking number | String | Show booking number |
| flight number | objectId | Show flight number |
| username | String | Show username |
| date of booking | Date | Show date of booking |
| date of travel | Date | Show date of travel |
| seat number | String | Show seat number |
| class | String | Show class |
| price | String | Show price |
*/

const bookingSchema = new mongoose.Schema({
  booking_number: String,
  flight_number: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight',
  },
  username: String,
  date_of_booking: Date,
  date_of_travel: Date,
  seat_number: String,
  class: String,
  price: String,
});

bookingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Booking', bookingSchema);
