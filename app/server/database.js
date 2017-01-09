function setUpDatabase (mongoose, mongooseUri) {
  mongoose.connect(mongooseUri, function(err, res) {
    if(err) {
      throw err;
    }
  });
};

module.exports = setUpDatabase;
