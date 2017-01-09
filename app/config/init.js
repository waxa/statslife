const bodyParser = require ('body-parser');

function init (app) {
  require('./database').init(app);

  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());

  require('./middleware').init(app);
};

module.exports = init;
