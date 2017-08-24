const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe out tests
describe('Nesting records', function(done){

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        });
    });

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

    it('Add a book to an author', function(done){
        var pat = new Author({
            name: 'Patric Rothfuss',
            books: [{title:'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){
            Author.findOne({name:'Patric Rothfuss'}).then(function(record){
                // add a book to the books array
                record.books.push({title:"Wise Man's Fear", pages: 500});
                record.save().then(function(){
                    Author.findOne({name:'Patric Rothfuss'}).then(function(record){
                        assert(record.books.length === 2);
                        done();
                    });
                });
            });
        });
    });

});
