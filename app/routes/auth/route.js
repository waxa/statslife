const passport = require('passport');

function init (app) {
  app.get('/', passport.authMiddleware(), function (req, res) {
    console.log("GET /");
    res.status(200).json({vaina: 'loca'});
  });
  app.post('/login', passport.authenticate('local'), function (req, res) {
    console.log("POST /login");
    res.sendStatus(201);
  });
};

module.exports = init;
