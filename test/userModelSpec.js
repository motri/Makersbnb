var expect = require('chai').expect;

var User = require('../app/models/user.js');

var testUser;

beforeEach(function() {
  testUser = new User( {email: 'joe.com',
                        name: 'Joe',
                        password: 'secret123'} );
});

describe('user', function() {
  it('has a email', function(done) {
    testUser.validate(function() {
      expect(testUser.email).to.exist;
      done();
    });
  });

  it('has a name', function(done) {
    testUser.validate(function() {
      expect(testUser.name).to.exist;
      done();
    });
  });

  it('has a password', function(done) {
    testUser.validate(function() {
      expect(testUser.name).to.exist;
      done();
    });
  });
});
