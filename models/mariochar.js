const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number,
});

// From the model method, the first parameter is the collection in the db, and the second parameter is the schema that each new instance is based on.
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;
