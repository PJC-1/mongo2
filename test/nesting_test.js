const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe out tests
describe('Nesting records', function(){
    // Create tests
    it('Creates an author with sub-documents', function(done){
        var pat = new Author({
            name:'Patric Rothfuss',
            books:[{title:'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){
          Author.findOne({name:'Patric Rothfuss'}).then(function(record){
            assert(record.books.length === 1);
            done();
          });
        });

    });

});
