const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', function() {
  console.log('connected to database ' + config.database);
});

mongoose.connection.on('error', function(err) {
  console.log('database error ' + err);
});

const app = express();

const users = require('./routes/users');

const port = 2368;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('/', function(req, res) {
  res.send('HOMPAAAGE!!');
});

app.listen(port, function() {
  console.log('Server started on port '+ port)
});
