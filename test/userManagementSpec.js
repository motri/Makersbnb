process.env.NODE_ENV = 'test';

var Browser = require('zombie');
var mongoose = require('mongoose');

Browser.localhost('localhost', 2368);

describe('User visits signup page', function() {

  var browser = new Browser();
  var app = require('../app/app.js');

  before(function(done) {
    browser.visit('/', done);

    mongoose.model('User').remove({}, function(err) {
      console.log('User collection cleaned')
    });
  });

  describe('submits form', function() {

    before(function(done) {
      browser
      .fill('name', 'Ghostbuster')
      .fill('email', 'hery@zombie.com')
      .fill('password', 'cunningpassword')
      .pressButton('Sign Up', done);
    });

    it('should be successful', function() {
     browser.assert.success();
    });

    it('should see welcome message on new page', function() {
      browser.assert.text('h1', 'Welcome Ghostbuster');
    });

  });
});
