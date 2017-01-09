const app = require('./app').app;
const port = require('./app').serverOptions.serverPort;

app.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log(`server is listening on ${port}...`)
});
