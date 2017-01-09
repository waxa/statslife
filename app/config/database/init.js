const mongoose = require('mongoose');
const options = require('./options');


function init (app) {
  mongoose.connect(options.uri, function(err, res) {
    if(err) {
      console.log('Not connected to Database!');
      throw err;
    }
    console.log('Connected to Database');
  });
  require('./models').init(mongoose);
};

module.exports = init;
