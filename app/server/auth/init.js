const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('mongoose').model('User');

const authMiddleware = require('./auth-middleware');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

function findUser (userToFind, fields, callback) {
  User.findOne( userToFind, fields )
  .lean().exec( function (err, user) {
    if (err) { return callback(err); }
    if (!user) { return callback(null); }
    return callback(null, user);
  });
};

function setPassport (app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, cb) {
    cb(null, user.username);
  });

  passport.deserializeUser(function (username, cb) {
    findUser({
      username:username
    },"_id username", cb);
  });

  passport.use(new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
    },
    function(username, password, done) {
      findUser({
        username: username
      },
      "_id username password",
      function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (password !== user.password) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  passport.authMiddleware = authMiddleware;
};

function initPassport (app, mongoUri) {
  var store = new MongoDBStore({
    uri: mongoUri,
    collection: 'mySessions'
  });

  // Catch errors
  store.on('error', function(error) {
    assert.ifError(error);
    assert.ok(false);
  });

  app.use(session({
      key: 'session_cookie_name',
      secret: 'session_cookie_secret',
      store: store,
      resave: true,
      saveUninitialized: true
  }));

  setPassport(app);
};

module.exports = initPassport;
