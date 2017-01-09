const passport = require('passport');

function init (app) {
  app.get('/api/users', passport.authMiddleware(), function (req, res) {
    console.log("GET /user");
    res.sendStatus(200);
  });
};

module.exports = init;
