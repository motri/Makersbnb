process.env.NODE_ENV ? process.env.NODE_ENV : process.env.NODE_ENV = 'development';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.listen(2368, function () {
  console.log('It is working!')
})
