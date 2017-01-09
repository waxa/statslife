function initUser (mongoose) {
  var userSchema = new mongoose.Schema({
		username: {
      type: String,
      unique: true
    },
		password: {
      type: String
    }
	});
	mongoose.model('User', userSchema);
};

module.exports = initUser;
