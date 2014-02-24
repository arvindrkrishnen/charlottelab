var mongodb = require('mongodb');
var url = require('url');
var log = console.log;

var Server = mongodb.Server, 
    Db = mongodb.Db,
    BSON = mongodb.BSONPure;

var connectionUri = url.parse(process.env.MONGOHQ_URL);
var dbName = connectionUri.pathname.replace(/^\//, '');

var AuthenticationCollectionObject = "charlottelabauthentication";

var collection = null;

//Open the database


mongodb.Db.connect(process.env.MONGOHQ_URL, function(error, client) {
  if (error) throw error;

  client.collectionNames(function(error, names){
    if(error) throw error;


   });

collection = client.collection(AuthenticationCollectionObject);


log("Connection Successful");



});



//Find All Entries and display

exports.findAll = function(req, res) {

log("*** findAll Called ***");

collection.find({}).toArray(function(err, items) {
  if(err) 
	return err;
	  
   res.send(items);

});


};

//Find by Employee ID
exports.findbyId = function(req, res) {
var id = req.params.id;
log("**!!! Employee ID: **@!!!" + id+"!!");
	
//  collection.findOne({'employeeID': new BSON.ObjectID(id)}, function(err, item) {

collection.findOne({employeeID: id}, function(err, employee) {
//collection.findOne({employeeID: "administrator"}, function(err, employee) {

     if (employee)
          res.send(employee.password);
     else
          res.send("Invalid");
     //   log(employee.password);
          log(employee);
          log(err);
    });
              
};

exports.addUser = function(req, res) {
var user = req.body;
log("adding User: " + JSON.stringify(user));
collection.insert(user, {safe:true}, function(err, result){
 if (err) 
	res.send("An Error has occurred");
 else
        res.send(result[0]);
  });
};

exports.updateUser = function(req, res) {
var id = req.params.id;
var user = req.body;

log("Updating user" + id);

log(JSON.stringify(user));

//collection.update({'_id':new BSON.ObjectID(id)}, user, {safe:true}, function(err, result) {
collection.update({employeeID:id}, user, {safe:true}, function(err, result) {

  if (err) {
      log("Error Updating" + err);
      res.send("Error Updating");
     }
   else {
      console.log(' ' + result + 'users added');
      res.send(user);
     }
 });

};