function initTask (mongoose) {
  var taskSchema = new mongoose.Schema({
		name: {
      type: String,
      unique: true,
      required: true
    }
	});
	mongoose.model('Task', taskSchema);
};

module.exports = initTask;
