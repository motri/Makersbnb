const express = require('express');
const router = express.Router();

router.get('/signup', function(req, res, next) {
  res.send('SIGN UP NOW!!!!!!!!!!')
});

module.exports = router;
