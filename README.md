Going through The Net Ninja's MongoDB Tutorial again.


DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html

From the connection.js file add this code:
mongoose.Promise = global.Promise;

We are using the ES6 default promise from the global object and overwriting the promise from mongoose.
