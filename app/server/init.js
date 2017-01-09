const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');

const mongooseUri = require('./options').mongoUri;

const app = express();

//setUp database and models
require('./database')(mongoose, mongooseUri);

//setUp models
require('./users').model(mongoose);

//setUp middleware
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client'));

//setUp user middleware like errorHandler
require('./middleware').init(app);

//setUp auth with passport
require('./auth').init(app, mongooseUri);

//setUp routes
require('./auth').route(app); // /login
require('./users').route(app); // /user

module.exports = app;
