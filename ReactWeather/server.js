var express = require('express');

//create our app
var app = express();

var PORT = 4000;

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});