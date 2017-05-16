
// This is how we use mongoose to create a user collection:
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myappdatabase');

var User = require('./models/user.js')

var Henry = new User({
  email: 'hnery.com',
  name: 'Henry',
  password: '123secret'
});

Henry.save(function(err) {
  if (err) throw err;

  console.log('Henry was saved!!!');
});
