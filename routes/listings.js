const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')

const Listing = require('../models/listing');
const User = require('../models/user');

router.post('/new-listing', function(req, res, next) {
  let newListing = new Listing({
    name: req.body.name,
    address: req.body.address,
    description: req.body.description,
    price: req.body.price,
    listedBy: req.body.id
  });

  Listing.addListing(newListing, function(err, listing) {
    if(err){
      res.json({success: false, msg: 'Unable to add listing.'});
    } else {
      res.json({success: true, msg: 'Listing added!'});
    }
  });
});

module.exports = router;
