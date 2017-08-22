const mongoose = require('mongoose');

// connect to MongoDB
mongoose.connect('mongodb://localhost/mongo2');

mongoose.connection.once('open', function(){
    console.log('Connection has been made');
}).on('error', function(error){
    console.log('Connection error. ', error);
});
