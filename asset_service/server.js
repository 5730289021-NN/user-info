var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./user'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var host=process.env.DATABASE_HOST||'127.0.0.1'
var portDB = 27017
var linkDB = 'mongodb://'+host+':'+portDB+'/user'
mongoose.connect(linkDB);
console.log(linkDB,'link of DB')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./userRoute');
routes(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
