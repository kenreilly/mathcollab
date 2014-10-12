// MathCollab Server

// Requires
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require ('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// Initialize App
var app = express();
var port = process.env.PORT || 8080;

// Connect to MongoDB
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

// Configure stuff
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.set('view engine', 'ejs');

// Configure Passport
require('./config/passport')(passport); // pass passport for configuration
app.use(session({ secret: 'mathcollabisawesome' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Static content and routes
app.use(express.static(__dirname + '/public'));
require('./app/routes.js')(app, passport);
app.listen(port);