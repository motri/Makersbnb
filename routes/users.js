const express = require('express');
const router = express.Router();

router.get('/signup', function(req, res, next) {
  res.send('SIGN UP NOW!!!!!!!!!!');
});

router.get('/authenticate', function(req, res, next) {
  res.send('AUTHENTICATE');
});

router.get('/profile', function(req, res, next) {
  res.send('PROFILE');
});

router.get('/validate', function(req, res, next) {
  res.send('VALIDATE');
});

module.exports = router;
