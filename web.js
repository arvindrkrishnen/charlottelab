var express = require('express'),
     auth = require('./routes/authentication');

var fs = require('fs');
var htmlfile = "newIndex.html";
var app = express.createServer(express.logger());
app.use(express.logger());

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});

app.get('/auth', auth.findAll);
app.get('/auth/:id', auth.findbyId);
app.post('/auth', auth.addUser);
app.put('/auth', auth.updateUser);


//app.get('/', function(request, response) {
//  var html = fs.readFileSync(htmlfile).toString();
//  response.send(html);
//});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
