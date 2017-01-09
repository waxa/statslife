const exampleMiddleware = require('./example-middleware');
const errorHandlerMiddleware = require('./error-handler-middleware');

function init (app) {
  // app.use(exampleMiddleware);
  app.use(errorHandlerMiddleware);
};

module.exports = init;
