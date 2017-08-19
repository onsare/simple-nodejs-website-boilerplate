var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var nodemailer = require('nodemailer');


var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index.js'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
console.log('App listening on http://localhost:3000');