function initUser (mongoose) {
  var userSchema = new mongoose.Schema({
		username: {
      type: String,
      unique: true,
      required: true
    },
		password: {
      type: String,
      equired: true
    },
    config: {
      dayStart: Number
    },
    tasks:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tasks'
    }]
	});
	mongoose.model('User', userSchema);
};

module.exports = initUser;
