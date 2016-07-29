var mongoose = require('mongoose');


var express = require('express');
var assignmentRouter = require('./routes/assignments');
var index = require('./routes/index');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', index);
app.use('/assignments', assignmentsRouter);

var mongoURI = "mongodb://localhost:27017/assignment";

var MongoDB = mongoose.connect(mongoURI).connection;

var db = mongoose.connect('mongodb://localhost/anyNameHere').connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Address', server.address());
  console.log('Listening on port', port);
});
