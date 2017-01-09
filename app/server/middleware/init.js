const errorHandlerMiddleware = require('./error-handler-middleware');

function init (app) {
  console.log('setUpMiddleware');
  app.use(errorHandlerMiddleware);
};

module.exports = init;
