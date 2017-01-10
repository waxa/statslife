function initUser (mongoose) {
  var userSchema = new mongoose.Schema({
		username: {
      type: String,
      unique: true,
      required: true
    },
		password: {
      type: String,
      required: true
    },
    dayStartHour: {
      type: Number,
      default: 0
    },
    dayStartMin: {
      type: Number,
      default: 0
    },
    tasks:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tasks'
    }]
	});
	mongoose.model('User', userSchema);
};

module.exports = initUser;
