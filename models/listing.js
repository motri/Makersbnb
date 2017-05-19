const mongoose = require('mongoose');
const config = require('../config/database');

const listingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  listedBy: {
    type: String
  }
});

const Listing = module.exports = mongoose.model('Listing', listingSchema)

module.exports.addListing = function(newListing, callback){
    newListing.save(callback);
}
