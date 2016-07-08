var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 80, function() {
  console.log('listen on port', process.env.PORT || 80);
})
