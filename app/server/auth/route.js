const passport = require('passport');

function init (app) {
  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    console.log("POST /login");
    res.sendStatus(201);
  });
};

module.exports = init;
