// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res){
  //res.sendFile take an absolute path to a file and sets the mime type based on the file extname
  res.sendFile(__dirname + '/index.html', function(err){
    if (err) {
      res.status(500).send(err);
    }
  })
});

app.get('/data', function(req, res){
  res.json(jsonData);
});

var port = 3000;
app.listen(port, function(){
  console.log('Listening on port: ', port)
});
