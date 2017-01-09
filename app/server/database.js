function setUpDatabase (mongoose, mongooseUri) {
  mongoose.connect(mongooseUri, function(err, res) {
    if(err) {
      console.log('Not connected to Database!');
      throw err;
    }
    console.log('Connected to Database');
  });
};

module.exports = setUpDatabase;
