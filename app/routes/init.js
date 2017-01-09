function init (app) {
  require('./auth').init(app);
  require('./auth').route(app);
  require('./user').init(app);
};

module.exports = init;
