const expect = require('chai').expect;

const User = require('../models/user.js');

var testUser;

beforeEach(function() {
  testUser = new User( {email: 'joe.com',
                        name: 'Joe',
                        password: 'secret123'} );
});

describe('User', function() {
  it('has email as joe.com', function(done) {
    testUser.validate(function() {
      expect(testUser.email).to.equal('joe.com');
      done();
    });
  });

  it('has a name as Joe', function(done) {
    testUser.validate(function() {
      expect(testUser.name).to.equal('Joe');
      done();
    });
  });

  it('has a password', function(done) {
    testUser.validate(function() {
      expect(testUser.password).to.equal('secret123');
      done();
    });
  });
});
