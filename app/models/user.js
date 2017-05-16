var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String},
  password: { type: String }
});

module.exports = mongoose.model('User', userSchema );
