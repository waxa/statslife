const errorHandlerMiddleware = require('./error-handler-middleware');
const corsMiddleware = require('./cors-middleware');

function init (app) {
  app.use(corsMiddleware);
  app.use(errorHandlerMiddleware);
};

module.exports = init;
