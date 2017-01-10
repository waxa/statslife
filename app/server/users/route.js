function init (app) {

  const passport = require('passport');
  const User = require('mongoose').model('User')

  function getUsers (req, res) {
    console.log("GET /users");
    res.sendStatus(200);
  };

  function postUsers (req, res) {
    console.log("PSOT /users");
    res.sendStatus(200);
  };

  app.get('/api/users', passport.authMiddleware(), getUsers);
  app.post('/api/users', passport.authMiddleware(), postUsers);

};

module.exports = init;
