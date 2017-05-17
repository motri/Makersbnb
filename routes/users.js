const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')

const User = require('../models/user');

router.post('/signup', function(req, res, next) {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  User.addUser(newUser, function(err, user) {
    if(err){
      res.json({success: false, msg: 'Failed to sign up user'});
    } else {
      res.json({success: true, msg: 'User signed up!'});
    }
  });
});

router.post('/signin', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, function(err, user){
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

router.get('/profile', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  res.json({user: req.user});
});

module.exports = router;
