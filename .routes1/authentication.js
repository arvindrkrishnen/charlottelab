var mongodb = require('mongodb');
var url = require('url');
var log = console.log;

var Server = mongodb.Server, 
    Db = mongodb.Db,
    BSON = mongodb.BSONPure;

var connectionUri = url.parse(process.env.MONGOHQ_URL);
var dbName = connectionUri.pathname.replace(/^\//, '');

var AuthenticationCollectionObject = "charlottelabauthentication";

//Open the database


mongodb.Db.connect(process.env.MONGOHQ_URL, function(error, client) {
  if (error) throw error;

  client.collectionNames(function(error, names){
    if(error) throw error;

   });

log("Connection Successful");


});


//Find All Entries and display

exports.findAll = function(req, res) {
log("*** findAll Called ***");
var db = new Db(client);
client.collection("charlottelabauthentication");
};

//Find the password for user ID

exports.findbyId = function(req, res) {
log("** new emp id ** " + req.params.employeeID);

var id = req.params.id;
var db = new Db(client);
log("**!!! Employee ID: ** " + id);

db.collection(AuthenticationCollectionObject, function(err, collection) {
	
  collection.findOne({'employeeID': new BSON.ObjectID(id)}, function(err, item) {
    res.send(item);
   });

});

};