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
    type: Number
    required: true
  },
  listedBy: {
    type: String
    required: true
  }
});
