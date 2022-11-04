const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

/*

| Field | Type | Description |
| username | String | Show username |
| password | String | Show password |
| email | String | Show email |
| phone number | String | Show phone number |
| address | String | Show address |
| city | String | Show user city |
| country | String | Show user country |
| role | String | Show user role |

*/

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone_number: String,
  address: String,
  city: String,
  country: String,
  role: String,
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', userSchema);
