const express = require('express');
const app = express();

// options variable
const options = require('./config').options;

//setUp middleware and database
require('./config').init(app);
require('./routes').init(app);

app.get('/', (request, response) => {
  console.log("get /");
  response.json({
    chance: request.chance
  });
});

module.exports = app;
