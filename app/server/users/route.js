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

  function getUsersUsername (req, res) {
    User.findOne({username: req.params.username}, "username", function (err, user) {
      if (err) {
        res.sendStatus(500);
      }
      if (user == null || !user) {
        res.status(200).json(user);
      }
      res.sendStatus(400);
    })
  }

  app.get('/api/users', passport.authMiddleware(), getUsers);
  app.get('/api/users/:username',  getUsersUsername);
  app.post('/api/users', passport.authMiddleware(), postUsers);

};

module.exports = init;
