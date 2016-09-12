var ip = require('ip');
var express = require('express');
var app = express();

// sets port 3000 as default unless otherwise specified in the environment
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.status(200).send('Running on host with IP ' + ip.address());
});

app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
  console.log('Running on host with IP ' + ip.address());
  console.log('The app can be accessed at URL ' + 'http://'+ ip.address() + ':' + app.get('port'));
});