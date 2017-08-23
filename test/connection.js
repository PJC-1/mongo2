const mongoose = require('mongoose');

// ES6 promises
mongoose.Promise = global.Promise;

// Connect to the db before the tests run
before(function(done){
    // connect to MongoDB
    mongoose.connect('mongodb://localhost/mongo2');

    mongoose.connection.once('open', function(){
      console.log('Connection has been made');
      done();
    }).on('error', function(error){
      console.log('Connection error. ', error);
    });
});

// Drop the characters collection before each test
beforeEach(function(done){
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});
