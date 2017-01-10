function init (app) {

  const passport = require('passport');
  const Task = require('mongoose').model('Task');

  function getTasks (req, res) {
    console.log("GET /tasks");
    res.sendStatus(200);
  };

  function postTasks (req, res) {
    console.log("POST /tasks");
    res.sendStatus(200);
  };

  app.get('/api/tasks', passport.authMiddleware(), getTasks);
  app.post('/api/tasks', passport.authMiddleware(), postTasks);

};

module.exports = init;
