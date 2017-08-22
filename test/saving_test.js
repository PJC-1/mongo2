const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe tests
describe('saving records', function(){
    // create tests
    it('Saves a record to the database', function(done){
        var char = new MarioChar({
            name: "PJC1",
            weight: 160
        });
        // .save() is a mongoose method
        char.save().then(function(){
            // .isNew is a mongoose method
            assert(char.isNew === false);
            // done() is a mocha method
            done();
        });
    });
});
