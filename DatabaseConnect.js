var mongodb = require('mongodb');
var url = require('url');
var log = console.log;

var connectionUri = url.parse(process.env.MONGOHQ_URL);
var dbName = connectionUri.pathname.replace(/^\//, '');

// Open the database

mongodb.Db.connect(process.env.MONGOHQ_URL, function(error, client) {
  if (error) throw error;

  client.collectionNames(function(error, names){
    if(error) throw error;
});



    var collection = new mongodb.Collection(client, lastCollection);
    log("\nDocuments in " + lastCollection);
    var documents = collection.find({}, {limit:5});

    // output a count of all documents found
    documents.count(function(error, count){
      log("  " + count + " documents(s) found");
      log("====================");

      // output the first 5 documents
      documents.toArray(function(error, docs) {
        if(error) throw error;

        docs.forEach(function(doc){
          log(doc);
        });


 // Create a new collection
	 client.createCollection("Charlottelabauthentication", function(err, collection) {
	if (err) throw err;

	});

// Add new documents in the collection
	var Charlottelab = client.collection("charlottelabauthentication");

        console.log("Going to insert");

         Charlottelab.insert({employeeID: "administrator", password: "admin123"},
            function(err, result) {
                 if (err) return cb(err)
	});


        // close the connection
        client.close();
      });
    });
  });
});